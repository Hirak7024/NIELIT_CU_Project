import { useRef } from 'react';
import { FaArrowUp } from "react-icons/fa6";
import "./ChatBot.css";

const ChatForm = ({ onSendMessage }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        onSendMessage(userMessage); // pass user message to parent
    };

    return (
        <form action="#" className="chat_form" onSubmit={handleFormSubmit}>
            <input 
                placeholder='Message...'
                className="message_input"
                type="text"
                ref={inputRef}
                required
            />
            <button><FaArrowUp/></button>
        </form>
    );
};

export default ChatForm;
