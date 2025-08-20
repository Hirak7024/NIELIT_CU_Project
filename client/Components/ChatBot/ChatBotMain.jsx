import { useContext, useEffect, useRef, useState } from 'react';
import ChatBotIcon from './ChatBotIcon';
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BsFillChatRightFill } from "react-icons/bs";
import { Context } from '../../Utils/Context';
import axios from 'axios';
import "./ChatBot.css";

const ChatBotMain = () => {
  const { loggedInUser } = useContext(Context);

  const [chatHistory, setChatHistory] = useState([]);
  const [showChatBot, setShowChatBot] = useState(false);
  const chatBodyRef = useRef();

  // ✅ Function to send chat to backend
  const saveChatToBackend = async (userMessage, botResponse) => {
    try {
      await axios.post("http://127.0.0.1:8000/chat/save/", {
        ChatData: {
          User: loggedInUser?.Name || "",
          Email: loggedInUser?.Email || "",
          SessionId: loggedInUser?.SessionId || "guest-session",  // fallback for anonymous
          Message: userMessage,
          Response: botResponse
        }
      });
    } catch (err) {
      console.error("Failed to save chat:", err);
    }
  };

  // ✅ Function to get bot response
  const generateBotResponse = async (userMessage) => {
    // add user message first
    setChatHistory(prev => [...prev, { role: "user", text: userMessage }]);

    // show "Thinking..." placeholder
    setChatHistory(prev => [...prev, { role: "model", text: "Thinking..." }]);

    const formattedHistory = [
      ...chatHistory,
      { role: "user", text: userMessage }
    ].map(({ role, text }) => ({
      role,
      parts: [{ text }]
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory })
    };

    try {
      const response = await fetch(import.meta.env.VITE_GEMINI_AI_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || "Something went wrong!");

      const botText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      // replace "Thinking..." with actual response
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== "Thinking..."),
        { role: "model", text: botText }
      ]);

      // ✅ save to backend
      await saveChatToBackend(userMessage, botText);

    } catch (error) {
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== "Thinking..."),
        { role: "model", text: error.message, isError: true }
      ]);
      console.error(error);
    }
  };

  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [chatHistory]);

  return (
    <div className={`container ${showChatBot ? "show-chatbot" : ""}`}>
      <button onClick={() => setShowChatBot(prev => !prev)} id='chatbot_toggler'>
        <span><BsFillChatRightFill /></span>
        <span><RxCross2 /></span>
      </button>

      <div className="chatbot_popup">
        {/* Header */}
        <div className="chat_header">
          <div className="header_info">
            <ChatBotIcon />
            <h2 className="logo_text">Chat Bot</h2>
          </div>
          <button onClick={() => setShowChatBot(prev => !prev)} >
            <IoIosArrowDown />
          </button>
        </div>

        {/* Body */}
        <div ref={chatBodyRef} className="chat_body">
          <div className="message bot_message">
            <ChatBotIcon />
            <p className="message_text">Hey there! How can I help you?</p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Footer */}
        <div className="chat_footer">
          <ChatForm onSendMessage={generateBotResponse} />
        </div>
      </div>
    </div>
  );
};

export default ChatBotMain;
