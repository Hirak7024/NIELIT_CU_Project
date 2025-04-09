import React, { useState } from 'react';
import axios from "axios";

export default function ChatBot() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleChange=(e)=>{
        setQuestion(e.target.value);
    }

    async function generateAnswer() {
        setAnswer("Loading....");
        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDWsdqfc9iGT9VzepWSHHSORxt888BF1UA",
            method: "POST",
            data: {
                contents: [{
                    parts: [{ text: question }]
                },
                ],
            },
        })
    console.log(response['data']['candidates'][0]['content']['parts'][0]['text']);
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
    }
    return (
        <div className='flex flex-col items-center gap-5'>
            <h1 className='text-[30px] font-semibold'>AI Chat Bot</h1>
            <textarea value={question} onChange={handleChange} cols={100} rows={5} className='border-2'></textarea>
            <button onClick={generateAnswer} className='bg-blue-500 text-white px-5 py-3 '>Generate Answer</button>
            <p className='w-[80vw]'>{answer}</p>
        </div>
    )
}
