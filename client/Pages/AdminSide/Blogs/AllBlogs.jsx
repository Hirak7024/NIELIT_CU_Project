import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from '../../Blogs/BlogItem';
// import { useNavigate } from 'react-router-dom';

export default function AllBlogs() {

    const [blogs, setBlogs] = useState([])
    // const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/blogs/blog/')
                setBlogs(response.data)
            } catch (error) {
                console.error('Failed to fetch blogs:', error)
            }
        }

        fetchBlogs()
    }, [])

    const formatDate = (isoDate) => {
        const date = new Date(isoDate)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    }



    return (
        <div className='ml-[20rem] w-[100%] px-[2rem]'>
            <h1 className='text-[40px] dm-serif font-[400] mt-[1rem] mb-[2rem]'>Blogs</h1>
            {blogs?.map((blog, index) => (
                <div key={index}>
                    <div className='w-[100%] h-fit flex gap-[1rem] cursor-pointer'>
                        <img src={blog.image_url} className='w-[80px] h-[76px] object-cover rounded-md' alt="" />
                        <div className='flex flex-col gap-[7px]'>
                            <div className='flex gap-[15px]'>
                                <h1 className='text-[#2B59E3] text-[14px] font-[600]'>Blog Post</h1>
                                <h2 className='text-[#55607E] text-[14px] font-[600]'>{formatDate(blog?.created_at)}</h2>
                            </div>
                            <h1 className='text-[20px] font-[700] leading-[1.2]'>{blog.heading}</h1>
                        </div>
                    </div>
                    {index !== blogs.length - 1 && (
                        <div className="my-[20px] border-t border-gray-200"></div>
                    )}
                </div>
            ))}
        </div>
    )
}
