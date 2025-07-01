import React, { useEffect, useState } from 'react'
import YouTubeVideoAdd from '../../Components/AdminSide/YouTubeVideoAdd';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import axios from 'axios';

export default function YouTubeVideo() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/youtubeVideo/fetch/");
                setVideos(response.data);
                console.log(response.data);
            } catch (err) {
                console.error("Failed to fetch videos:", err);
                setError("Failed to load Videos");
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    // Helper function to extract video ID from YouTube URL
    const getYouTubeVideoId = (url) => {
        try {
            const parsedUrl = new URL(url);
            if (parsedUrl.hostname === "youtu.be") {
                return parsedUrl.pathname.slice(1);
            }
            return new URLSearchParams(parsedUrl.search).get("v");
        } catch {
            return null;
        }
    };

    return (
        <div className='w-full h-full px-[2.5rem] py-[1rem] ml-[20rem]'>
            <h1 className='text-[35px] font-[600]'>YouTube Videos</h1>
            <YouTubeVideoAdd />

            <div className='w-full mt-[2rem]'>
                {videos.length !== 0 && (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left' sx={{ fontWeight: "600" }}>Id</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "600" }}>Thumbnail</TableCell>
                                    <TableCell align='left' sx={{ fontWeight: "600" }}>Title</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "600" }}>Link</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "600" }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {videos.map((video) => {
                                    const videoId = getYouTubeVideoId(video.video_link);
                                    const thumbnailUrl = videoId
                                        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                                        : null;

                                    return (
                                        <TableRow
                                            key={video.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                                        >
                                            <TableCell component="th" scope="row" align='left'>{video.id}</TableCell>
                                            <TableCell align="left">
                                                {thumbnailUrl ? (
                                                    <img src={thumbnailUrl} alt="Thumbnail" width="120" />
                                                ) : (
                                                    "Invalid link"
                                                )}
                                            </TableCell>
                                            <TableCell align="left">{video.video_title}</TableCell>
                                            <TableCell align="left">
                                                <a href={video.video_link} target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                                                    {video.video_link}
                                                </a>
                                            </TableCell>
                                            <TableCell align='left'>
                                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                    <BiEdit style={{ cursor: 'pointer', width:"1.2rem", height:"1.2rem", color:"blue"}} />
                                                    <MdDeleteOutline style={{ cursor: 'pointer', width:"1.2rem", height:"1.2rem", color:"red" }} />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </div>
        </div>
    )
}
