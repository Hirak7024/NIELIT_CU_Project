import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function AnonymousUsersChats() {
   const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch anonymous user chats on mount
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/chat/unregistered/");
        setChats(response.data);
      } catch (err) {
        console.error("Failed to fetch chats:", err);
        setError("Failed to load anonymous user chats.");
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
    console.log(chats)
  }, []);
  return (
    <div className='w-full h-full px-[2.5rem] py-[1rem]'>
      <h1 className='text-[30px] dm-serif font-[500]'>Anonymous Users</h1>
    </div>
  )
}
