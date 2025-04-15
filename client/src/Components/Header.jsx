import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-[5rem] flex justify-between items-center px-[1rem] bg-blue-950 text-white'>
        <img className='w-[7rem] h-[4rem] object-contain cursor-pointer' 
        onClick={()=>navigate("/")}
        src="./Assets/Images/mental_health_logo_2.png" 
        alt="Mental Health Logo" />
        <h1 className='text-[40px] font-semibold cursor-pointer'>Mental Health</h1>
        <div>
            <div className='flex gap-[0.7rem]'>
                <FaFacebook className='h-[1.5rem] w-[1.5rem] cursor-pointer'/>
                <FaInstagram className='h-[1.5rem] w-[1.5rem] cursor-pointer'/>
                <FaXTwitter className='h-[1.5rem] w-[1.5rem] cursor-pointer'/>
            </div>
            <div className='mt-[10px]'>
            <h5 className='text-sm cursor-pointer'>+91 9876543210</h5>
            <h5 className='text-sm mt-[-2px] cursor-pointer'>mentalHealth@gmail.com</h5>
            </div>
        </div>
    </div>
  )
}
