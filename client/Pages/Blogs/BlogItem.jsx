import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogItem({ blogData }) {

    const navigate = useNavigate();
    // Parse the created_at date
    const dateObj = new Date(blogData.created_at);

    // Format the date as "August 4 2025"
    const formattedDate = dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).replace(",", ""); // Remove comma if present

    return (
        <div onClick={()=>navigate(`/blogs/singleBlog/${blogData.id}`)} className ='w-[100%] h-fit flex gap-[1rem] py-[16px] cursor-pointer'>
            <img src={blogData.image_url} className='w-[80px] h-[76px] object-cover rounded-md' alt="" />
            <div className='flex flex-col gap-[7px]'>
                <div className='flex gap-[15px]'>
                    <h1 className='text-[#2B59E3] text-[14px] font-[600]'>Blog Post</h1>
                    <h2 className='text-[#55607E] text-[14px] font-[600]'>{formattedDate}</h2>
                </div>
                <h1 className='text-[20px] font-[700] leading-[1.2]'>{blogData.heading}</h1>
            </div>
        </div>
    );
}
