import React from 'react'

export default function BlogItem({heading}) {
    return (
        <div className='w-[100%] h-fit flex gap-[1rem] py-[16px]'>
            <img src="./Assets/Mantra-M-1.webp" className='w-[80px] h-[76px] object-cover rounded-md' alt="" />
            <div className='flex flex-col gap-[7px]'>
                <div className='flex gap-[15px]'>
                    <h1 className='text-[#2B59E3] text-[14px] font-[600]'>Blog Post</h1>
                    <h2 className='text-[#55607E] text-[14px] font-[600]'>Jun 18 2025</h2>
                </div>
                <h1 className='text-[20px] font-[700] leading-[1.2]'>{heading}</h1>
            </div>
        </div>
    )
}
