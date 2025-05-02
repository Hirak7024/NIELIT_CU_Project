import React from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { IoDocumentsSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
    const navigate = useNavigate();
    return (
        <div className='w-screen flex gap-[10rem] items-center justify-center mt-[10rem]'>
            <div onClick={()=>navigate("/adminPage/video/add")}
            className='w-[12rem] h-[12rem] flex flex-col justify-center items-center cursor-pointer'> 
                <IoLogoYoutube className='w-full h-[90%] text-red-600' />
                <h2 className='text-lg font-medium'>Add Youtube Videos</h2>
            </div>
            <div className='w-[12rem] h-[12rem] flex flex-col justify-center items-center cursor-pointer'>
                <IoDocumentsSharp className='w-full h-[90%] text-blue-700' />
                <h2 className='text-lg font-medium' >Add Documents</h2>
            </div>
        </div>
    )
}
