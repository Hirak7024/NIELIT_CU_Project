import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function AnonymousUsersChats() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessageResponse, setShowMessageResponse] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  // Fetch anonymous user chats on mount
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/chat/unregistered/");
        setChats(response.data);
        console.log("Anonymous Users Chats:", response.data);
      } catch (err) {
        console.error("Failed to fetch chats:", err);
        setError("Failed to load anonymous user chats.");
      } finally {
        setLoading(false);
      }
    };
    fetchChats();
  }, []);

  const handleRowDoubleClick = (chat) => {
    setSelectedChat(chat);
    setShowMessageResponse(true);
  };

  const handleBack = () => {
    setShowMessageResponse(false);
    setSelectedChat(null);
  };

  return (
    <div className='w-full h-full px-[2.5rem] py-[1rem] ml-[20rem]'>
      <div className="flex items-center justify-between mb-[1.5rem]">
        <h1 className='text-[35px] dm-serif font-[500]'>
          {showMessageResponse ? 'Anonymous User Chat Messages' : 'Anonymous Users'}
        </h1>
        {showMessageResponse && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleBack}
            sx={{ height: '40px' }}
          >
            Back
          </Button>
        )}
      </div>

      {!showMessageResponse ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="anonymous users table">
            <TableHead>
              <TableRow>
                <TableCell align='left' sx={{ fontWeight: "600" }}>Id</TableCell>
                <TableCell align='left' sx={{ fontWeight: "600" }}>Session Id</TableCell>
                <TableCell align='left' sx={{ fontWeight: "600" }}>Timestamp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chats.map((chat) => (
                <TableRow
                  key={chat.id}
                  onDoubleClick={() => handleRowDoubleClick(chat)}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                >
                  <TableCell component="th" scope="row" align='left'>{chat.id}</TableCell>
                  <TableCell align="left">{chat.session_id}</TableCell>
                  <TableCell align="left">{new Date(chat.timestamp).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        selectedChat && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 className="text-[22px] font-semibold mb-4">
              Session ID: {selectedChat.session_id}
            </h2>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', width: "40%" }}>User Message</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', width: "60%" }}>Bot Response</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedChat.chats.map((c, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{c.user}</TableCell>
                      <TableCell>{c.bot}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
}
