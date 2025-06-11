import { useEffect, useRef, useState } from 'react'
import ChatBotIcon from './ChatBotIcon'
import ChatForm from './ChatForm'
import ChatMessage from './ChatMessage'
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BsFillChatRightFill } from "react-icons/bs";
import "./ChatBot.css"

const ChatBotMain = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatBot, setShowChatBot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {

    // Helper function to update chat history
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text, isError }])
    }

    // Format chat history for API request
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    // console.log(history);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history })
    }

    try {
      // Make the API call to get the bot's response
      const response = await fetch(import.meta.env.VITE_GEMINI_AI_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Something went wrong!");

      // console.log(data);
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();

      // Clean and update chat history with bot's response
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
      console.log(error);
    }
  }

  useEffect(() => {
    // Auto-scroll whenever chat history updates
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory])

  return (
    <div className={`container ${showChatBot ? "show-chatbot" : ""}`}>
      <button onClick={() => setShowChatBot(prev => !prev)} id='chatbot_toggler'>
        <span><BsFillChatRightFill/></span>
        <span><RxCross2/></span>
      </button>
      <div className="chatbot_popup">
        {/* Chatbot Header */}
        <div className="chat_header">
          <div className="header_info">
            <ChatBotIcon />
            <h2 className="logo_text">Chat Bot</h2>
          </div>
          <button onClick={() => setShowChatBot(prev => !prev)} ><IoIosArrowDown/></button>
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat_body">
          <div className="message bot_message">
            <ChatBotIcon />
            <p className="message_text">Hey there ! How can I help you ?</p>
          </div>

          {/* Render the chat histroy dynamically */}
          {chatHistory?.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat_footer">
          <ChatForm
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
            chatHistory={chatHistory}
          />
        </div>
      </div>
    </div>
  )
}

export default ChatBotMain;
