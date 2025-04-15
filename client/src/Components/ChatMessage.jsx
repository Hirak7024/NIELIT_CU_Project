import React from 'react'
import ChatBotIcon from './ChatBotIcon'

const ChatMessage = ({ chat }) => {
    return (
        <div className={`message ${chat.role === "model" ? 'bot' : 'user'}_message ${chat.isError ? "error":""}`}>
            {chat.role === "model" && <ChatBotIcon />}
            <p className="message_text">{chat.text}</p>
        </div>
    )
}

export default ChatMessage
