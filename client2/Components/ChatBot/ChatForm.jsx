import { useRef } from 'react';
import { FaArrowUp } from "react-icons/fa6";
import "./ChatBot.css";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        // console.log(userMessage);
        // Update the chat history with user's message
        setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

        setTimeout(() => {
            setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);

            //Call the function to generate Bot response
            generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
        }, 600);
    };

    return (
        <form action="#" className="chat_form" onSubmit={handleFormSubmit}>
            <input placeholder='Message...'
                className="message_input"
                type="text"
                ref={inputRef}
                required />
            <button><FaArrowUp/></button>
        </form>
    )
}

export default ChatForm
