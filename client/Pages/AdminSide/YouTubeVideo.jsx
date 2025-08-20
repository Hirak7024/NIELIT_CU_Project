import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline, MdDone, MdOutlineCancel } from "react-icons/md";
import { toast } from 'react-toastify';
import axios from 'axios';

export default function YouTubeVideo() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editedVideo, setEditedVideo] = useState({ video_title: '', video_link: '' });

    // For adding Video
    const [formData, setFormData] = useState({
        video_title: "",
        video_link: ""
    })

    const addVideo = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/youtubeVideo/post/", formData)
            console.log(response.data);
            toast.success(response.data.message);
            setVideos(prev => [...prev, response.data.data]);
            setFormData({ video_title: "", video_link: "" })
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addVideo();
    };

    // Fetch all videos on mount
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/youtubeVideo/fetch/");
                setVideos(response.data);
                console.log(response.data)
            } catch (err) {
                console.error("Failed to fetch videos:", err);
                setError("Failed to load Videos");
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, []);

    // Extract YouTube video ID
    const getYouTubeVideoId = (url) => {
        try {
            const parsedUrl = new URL(url);
            if (parsedUrl.hostname === "youtu.be") return parsedUrl.pathname.slice(1);
            return new URLSearchParams(parsedUrl.search).get("v");
        } catch {
            return null;
        }
    };

    // Delete handler
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this video?")) return;
        try {
            await axios.post("http://127.0.0.1:8000/youtubeVideo/delete/", { id });
            setVideos(prev => prev.filter(video => video.id !== id));
        } catch (err) {
            console.error("Error deleting video:", err);
            alert("Failed to delete video");
        }
    };

    // Edit click handler
    const startEditing = (video) => {
        setEditingId(video.id);
        setEditedVideo({ video_title: video.video_title, video_link: video.video_link });
    };

    // Save edited video
const saveEdit = async (id) => {
    try {
        const response = await axios.put("http://127.0.0.1:8000/youtubeVideo/edit/", {
            id,
            ...editedVideo
        });

        toast.success(response.data.message || "Video updated successfully");

        // Update local state after successful API call
        setVideos(prev =>
            prev.map(video =>
                video.id === id ? { ...video, ...editedVideo } : video
            )
        );

        setEditingId(null);
        setEditedVideo({ video_title: '', video_link: '' });
    } catch (err) {
        console.error("Failed to update video", err);
        toast.error("Failed to update video");
    }
};

    // Update input field values
    const handleEditChange = (field, value) => {
        setEditedVideo(prev => ({ ...prev, [field]: value }));
    };

    // To cancel Edit
    const cancelEdit = () => {
        setEditingId(null);
        setEditedVideo({ video_title: '', video_link: '' });
    };


    return (
        <div className='w-full h-full px-[2.5rem] py-[1rem] ml-[20rem]'>
            <h1 className='text-[35px] font-[600]'>YouTube Videos</h1>

            <form className='flex flex-col items-center bg-[#0F0F0F] text-white px-[2rem] mt-[1rem] pt-[15px] pb-[15px] rounded-[10px]'
                onSubmit={handleSubmit}>
                <h1 className='text-[20px] mb-[15px]'>Add a new video</h1>
                <div className='w-full flex flex-row items-center gap-[1rem]'>
                    <h1 className='text-[16px] font-[500]'>Title</h1>
                    <input className='p-[10px] w-full text-[14px] bg-[#272727]'
                        type="text"
                        placeholder='Enter video title'
                        id='Video_Title'
                        name='video_title'
                        value={formData.video_title}
                        onChange={handleChange} />
                </div>
                <div className='w-full flex flex-row items-center gap-[1rem] mt-[10px]'>
                    <h1 className='text-[16px] font-[500]'>Link</h1>
                    <input className='ml-[3px] p-[10px] w-full text-[14px] bg-[#272727]'
                        type="text"
                        placeholder='Enter video url'
                        id='Video_Litle'
                        name='video_link'
                        value={formData.video_link}
                        onChange={handleChange} />
                </div>
                <button type='submit' className='self-start mt-[1rem] bg-blue-700 text-white font-[500] text-[14px] w-[7rem] h-[2.3rem] rounded-[5px] cursor-pointer'>Add</button>
            </form>

            <div className='w-full mt-[2rem]'>
                {videos.length !== 0 && (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="youtube video table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" sx={{ fontWeight: "600" }}>Id</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "600" }}>Thumbnail</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "600" }}>Title</TableCell>
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

                                    const isEditing = editingId === video.id;

                                    return (
                                        <TableRow key={video.id}>
                                            <TableCell align="left">{video.id}</TableCell>

                                            <TableCell align="left">
                                                {thumbnailUrl ? (
                                                    <img src={thumbnailUrl} alt="Thumbnail" width="120" />
                                                ) : "Invalid link"}
                                            </TableCell>

                                            <TableCell align="left">
                                                {isEditing ? (
                                                    <input
                                                        value={editedVideo.video_title}
                                                        onChange={(e) => handleEditChange('video_title', e.target.value)}
                                                        className="border px-[10px] py-[12px] outline-none focus:border-[2px] focus:border-blue-700 rounded w-full"
                                                    />
                                                ) : (
                                                    video.video_title
                                                )}
                                            </TableCell>

                                            <TableCell align="left">
                                                {isEditing ? (
                                                    <input
                                                        value={editedVideo.video_link}
                                                        onChange={(e) => handleEditChange('video_link', e.target.value)}
                                                        className="border px-[10px] py-[12px] outline-none focus:border-[2px] focus:border-blue-700 rounded w-full"
                                                    />
                                                ) : (
                                                    <a
                                                        href={video.video_link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 underline"
                                                    >
                                                        {video.video_link}
                                                    </a>
                                                )}
                                            </TableCell>

                                            <TableCell align="left">
                                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                    {isEditing ? (
                                                        <>
                                                            <MdDone
                                                                title="Save"
                                                                onClick={() => saveEdit(video.id)}
                                                                style={{ cursor: 'pointer', color: 'green', fontSize: "1.5rem" }}
                                                            />
                                                            <MdOutlineCancel
                                                                title="Cancel"
                                                                onClick={cancelEdit}
                                                                style={{ cursor: 'pointer', color: 'red', fontSize: "1.5rem" }}
                                                            />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <BiEdit
                                                                title="Edit"
                                                                onClick={() => startEditing(video)}
                                                                style={{ cursor: 'pointer', color: 'blue', fontSize: "1.5rem" }}
                                                            />
                                                            <MdDeleteOutline
                                                                title="Delete"
                                                                onClick={() => handleDelete(video.id)}
                                                                style={{ cursor: 'pointer', color: 'red', fontSize: "1.5rem" }}
                                                            />
                                                        </>
                                                    )}
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
    );
}
