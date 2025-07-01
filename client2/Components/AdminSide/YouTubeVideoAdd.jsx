import React,{useState} from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

export default function YouTubeVideoAdd() {
    const [formData, setFormData] = useState({
        video_title: "",
        video_link: ""
    })

    const addVideo = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/youtubeVideo/post/", formData)
            console.log(response.data);
            toast.success(response.data.message);
            window.location.reload()
            // setFormData({video_title: "",video_link: ""})
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

    return (
        <form className='bg-[#0F0F0F] text-white px-[2rem] mt-[1rem] pt-[2rem] pb-[15px] rounded-[10px]'
            onSubmit={handleSubmit}>
            <div className='flex flex-row items-center gap-[1rem]'>
                <h1 className='text-[16px] font-[500]'>Title</h1>
                <input className='p-[10px] w-full text-[14px] bg-[#272727]'
                    type="text"
                    placeholder='Enter video title'
                    id='Video_Title'
                    name='video_title'
                    value={formData.video_title}
                    onChange={handleChange} />
            </div>
            <div className='flex flex-row items-center gap-[1rem] mt-[10px]'>
                <h1 className='text-[16px] font-[500]'>Link</h1>
                <input className='ml-[3px] p-[10px] w-full text-[14px] bg-[#272727]'
                    type="text"
                    placeholder='Enter video url'
                    id='Video_Litle'
                    name='video_link'
                    value={formData.video_link}
                    onChange={handleChange} />
            </div>
            <button type='submit' className='mt-[1rem] bg-blue-700 text-white font-[500] text-[14px] px-[2rem] py-[0.5rem] rounded-[7px] cursor-pointer'>Add</button>
        </form>
    )
}
