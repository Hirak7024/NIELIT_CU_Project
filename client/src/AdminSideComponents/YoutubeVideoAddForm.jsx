import { TextField, Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function YoutubeVideoAddForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        video_id: ""
    })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/youTube/videos/create/', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200 || response.status === 201) {
                alert('Video Added Successfully!');
                console.log(response.data);
                setFormData({
                    title: "",
                    video_id: ""
                });
            } else {
                alert('Something went wrong while submitting the form.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while submitting the form.');
        }
    };

    return (
        <div className='w-screen h-screen flex justify-center bg-cyan-400'>
            <p onClick={()=>navigate("/adminPage")}
            className='absolute left-5 top-5 cursor-pointer text-white font-semibold hover:underline'>Back to Home</p>
            <form onSubmit={handleSubmit}
                className='w-[60vw] h-fit flex flex-col items-center gap-[2rem] mt-[10rem] bg-white py-[2rem] px-[3rem] rounded-[20px]'>
                <h2 className='text-[35px] font-medium'>Add Video</h2>
                <TextField fullWidth
                    name="title"
                    label="Add the title for a Video"
                    value={formData.title}
                    onChange={handleChange}
                />
                <TextField fullWidth
                    name="video_id"
                    label="Add the Video ID"
                    value={formData.video_id}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: '8rem', height: '2.7rem', fontSize: '16px', alignSelf: 'center' }}
                >Submit</Button>
            </form>
        </div>
    )
}
