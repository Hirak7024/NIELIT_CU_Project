import React from 'react'

export default function SideBar() {
    return (
        <div className='w-[20rem] h-[100vh] bg-[#1D2744] flex flex-col text-white'>
            <div className='flex flex-row items-center gap-[10px] p-[1rem] border-b-1 border-b-white'>
                <img src="./Assets/Mantra-Icon-Reverse.png" className='w-[24px] h-[24px] object-contain' alt="" />
                <h1 className='text-[24px] dm-serif font-500'>Mantra</h1>
            </div>
            <ul className='w-full h-full'>
                <li className='p-[1rem] cursor-pointer text-[16px] font-[500] hover:bg-[#596ca4]'>YouTube Videos</li>
                <li className='p-[1rem] cursor-pointer text-[16px] font-[500] hover:bg-[#596ca4]'>Articles</li>
                <li className='p-[1rem] cursor-pointer text-[16px] font-[500] hover:bg-[#596ca4]'>Blogs</li>
                <li className='p-[1rem] cursor-pointer text-[16px] font-[500] hover:bg-[#596ca4]'>Chats</li>
                <li className='p-[1rem] cursor-pointer text-[16px] font-[500] hover:bg-[#596ca4]'>Registered Users</li>
                <li className='p-[1rem] cursor-pointer text-[16px] font-[500] hover:bg-[#596ca4]'>Unregistered Users</li>
                <li className='p-[1rem] cursor-pointer text-[16px] font-[500] hover:bg-[#596ca4]'>Logout</li>
            </ul>
        </div>
    )
}
