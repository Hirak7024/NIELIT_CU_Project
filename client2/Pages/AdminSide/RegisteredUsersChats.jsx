import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function RegisteredUsersChats() {
   const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch registered user chats on mount
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/chat/registered/");
        setChats(response.data);
      } catch (err) {
        console.error("Failed to fetch chats:", err);
        setError("Failed to load registered user chats.");
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
    console.log(chats)
  }, []);
  return (
    <div className='w-full h-full px-[2.5rem] py-[1rem]'>
      <h1 className='text-[35px] dm-serif font-[500] mb-[1.5rem]'>Registered Users</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>id</TableCell>
            <TableCell align='left'>Session Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            {/* <TableCell align="right">Message</TableCell>
            <TableCell align="right">Bot Response</TableCell>
            <TableCell align="right">Time Stamp</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {chats.map((chat) => (
            <TableRow
              key={chat.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='left'>{chat.id}</TableCell>
              <TableCell align="left">{chat.session_id}</TableCell>
              <TableCell align="left">{chat.name}</TableCell>
              <TableCell align="left">{chat.email}</TableCell>
              {/* <TableCell align="right">{chat.user_message}</TableCell>
              <TableCell align="right">{chat.bot_response}</TableCell>
              <TableCell align="right">{chat.timestamp}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}
