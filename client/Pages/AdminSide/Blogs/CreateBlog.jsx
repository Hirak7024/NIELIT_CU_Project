import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog({ placeholder }) {
    const editor = useRef(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        heading: '',
        subheading: '',
        featuredImage: ''
    });

    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        height: 400,
        width: '70vw',
        readonly: false,
        placeholder: placeholder || 'Write your blog here...'
    }), [placeholder]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClear = () => {
        setFormData({
            heading: '',
            subheading: '',
            featuredImage: ''
        });
        setContent('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/blogs/blog/create/', {
                heading: formData.heading,
                subheading: formData.subheading,
                image_url: formData.featuredImage,
                content: content
            });

            console.log('Blog created successfully:', response.data);
            toast.success(response.data.message)
            navigate('/adminSide/allBlogs');
        } catch (error) {
            console.error('Error creating blog:', error);
            toast.error(error.response.data.message)
        }
    };

    return (
        <div className='ml-[20rem] w-[100vw] h-[100vh] bg-blue-50'>
            <h1 className='text-[25px] font-[700] mb-[15px] ml-[2rem] mt-[1.5rem]'>Create a Blog</h1>
            <form
                className='w-[75vw] bg-white shadow-sm flex flex-col gap-[5px] items-center px-[2rem] ml-[1.5rem] mt-[1rem] pt-[15px] pb-[25px] rounded-[10px]'
                onSubmit={handleSubmit}
            >
                <div className='w-full flex flex-row items-center gap-[3px]'>
                    <h1 className='text-[16px] font-[500] w-[10rem]'>Heading</h1>
                    <input
                        className='p-[10px] w-full text-[14px] outline-blue-600'
                        type="text"
                        placeholder='Enter Heading'
                        name='heading'
                        value={formData.heading}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-full flex flex-row items-center gap-[3px]'>
                    <h1 className='text-[16px] font-[500] w-[10rem]'>Subheading</h1>
                    <input
                        className='p-[10px] w-full text-[14px] outline-blue-600'
                        type="text"
                        placeholder='Enter Subheading'
                        name='subheading'
                        value={formData.subheading}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-full flex flex-row items-center gap-[3px] mb-[10px]'>
                    <h1 className='text-[16px] font-[500] w-[10rem]'>Featured Image</h1>
                    <input
                        className='p-[10px] w-full text-[14px] outline-blue-600'
                        type="text"
                        placeholder='Paste Featured Image URL'
                        name='featuredImage'
                        value={formData.featuredImage}
                        onChange={handleChange}
                    />
                </div>
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={newContent => setContent(newContent)}
                    onChange={() => { }}
                />
                <div className='flex gap-4 mt-[1rem] self-start'>
                    <button type='submit' className='bg-blue-700 text-white font-[500] text-[14px] w-[7rem] h-[2.3rem] rounded-[5px] cursor-pointer'>Create</button>
                    <button type='button' onClick={handleClear} className='bg-red-500 text-white font-[500] text-[14px] w-[7rem] h-[2.3rem] rounded-[5px] cursor-pointer'>Clear</button>
                </div>
            </form>
        </div>
    );
}
