import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate();
    const [openChats, setOpenChats] = useState(false);
    const [openBlogs, setOpenBlogs] = useState(false);

    const handleChatsClick = () => {
        setOpenChats(!openChats);
    };

    const handleBlogsClick = () => {
        setOpenBlogs(!openBlogs);
    };

    return (
        <div className='w-[20rem] h-full bg-[#1D2744] flex flex-col text-white fixed'>
            <div className='flex flex-row items-center gap-[10px] p-[1rem] border-b-1 border-b-white'>
                <img src="/Assets/Mantra-Icon-Reverse.png" className='w-[24px] h-[24px] object-contain' alt="" />
                <h1 className='text-[24px] dm-serif font-500'>Mantra</h1>
            </div>
            <List
                sx={{ width: "100%", maxWidth: "20rem", bgcolor: "#1D2744", color: "white" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton sx={{ '&:hover': { bgcolor: "#596ca4", cursor: "pointer" } }} onClick={() => navigate("/adminSide/youtubeVideos")}>
                    <ListItemText sx={{ fontSize: "20px", marginLeft: "1rem", padding: "5px" }} primary="Youtube Videos" />
                </ListItemButton>

                {/* <ListItemButton sx={{ '&:hover': { bgcolor: "#596ca4", cursor: "pointer" } }}>
                    <ListItemText sx={{ fontSize: "20px", marginLeft: "1rem", padding: "5px" }} primary="Users" />
                </ListItemButton> */}

                {/* Blogs Section */}
                <ListItemButton onClick={handleBlogsClick} sx={{ '&:hover': { bgcolor: "#596ca4", cursor: "pointer" } }}>
                    <ListItemText sx={{ fontSize: "20px", marginLeft: "1rem", padding: "5px" }} primary="Blogs" />
                    {openBlogs ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openBlogs} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, '&:hover': { bgcolor: "#596ca4", cursor: "pointer" } }} onClick={() => navigate('/adminSide/createBlog')}>
                            <ListItemText sx={{ fontSize: "18px", marginLeft: "1rem", padding: "5px" }} primary="Create Blog" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, '&:hover': { bgcolor: "#596ca4", cursor: "pointer" } }} onClick={() => navigate('/adminSide/allBlogs')}>
                            <ListItemText sx={{ fontSize: "18px", marginLeft: "1rem", padding: "5px" }} primary="All Blogs" />
                        </ListItemButton>
                    </List>
                </Collapse>



                {/* Chats Section */}
                <ListItemButton onClick={handleChatsClick} sx={{ '&:hover': { bgcolor: "#596ca4", cursor: "pointer" } }}>
                    <ListItemText sx={{ fontSize: "20px", marginLeft: "1rem", padding: "5px" }} primary="Chats" />
                    {openChats ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openChats} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, '&:hover': { bgcolor: "#596ca4", cursor: "pointer" } }} onClick={() => navigate('/adminSide/registeredUsers')}>
                            <ListItemText sx={{ fontSize: "18px", marginLeft: "1rem", padding: "5px" }} primary="Registered Users" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, '&:hover': { bgcolor: "#596ca4", cursor: "pointer" } }} onClick={() => navigate('/adminSide/anonymousUsers')}>
                            <ListItemText sx={{ fontSize: "18px", marginLeft: "1rem", padding: "5px" }} primary="Anonymous Users" />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* Logout */}
                <ListItemButton sx={{ '&:hover': { bgcolor: "#596ca4", cursor: "pointer" } }} onClick={() => navigate("/adminSide")}>
                    <ListItemText sx={{ fontSize: "20px", marginLeft: "1rem", padding: "5px" }} primary="Logout" />
                </ListItemButton>
            </List>
        </div>
    );
}
