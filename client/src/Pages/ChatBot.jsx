import React, { useEffect, useRef, useState } from 'react'
import ChatBotIcon from '../Components/ChatBotIcon'
import ChatForm from '../Components/ChatForm'
import ChatMessage from '../Components/ChatMessage'

const ChatBot = () => {
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
      const response = await fetch(process.env.REACT_APP_API_URL, requestOptions);
    //   console.log("API URL is :", process.env.REACT_APP_API_URL);
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
    <div className="container">
      {/* <button onClick={() => setShowChatBot(prev => !prev)} id='chatbot_toggler'>
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button> */}
      <div className="chatbot_popup">
        {/* Chatbot Header */}
        <div className="chat_header">
          <div className="header_info">
            <ChatBotIcon />
            <h2 className="logo_text">Chat Bot</h2>
          </div>
          <button onClick={() => setShowChatBot(prev => !prev)} className="material-symbols-rounded">keyboard_arrow_down</button>
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

export default ChatBot;
