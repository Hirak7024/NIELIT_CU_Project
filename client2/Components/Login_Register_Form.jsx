import React from 'react'

export default function Login_Register_Form() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#F7F9FF]'>
      <div className='w-[468px] shadow-md'>
        <div className='flex flex-col justify-between w-full h-[220px] p-[24px] bg-[#1D2744] banner-bg text-white'>
            <div className='flex items-center gap-[1rem]'>
                <img src="./Assets/Mantra-Icon-Reverse.png" className='w-[24px] h-[24px] object-contain' alt="" />
                <h3 className='dm-serif text-[24px] font-[400]'>Mantra Health</h3>
            </div>
            <h1 className='dm-serif text-[48px] leading-[0.9]'>School-sponsored <br/> mental health care.</h1>
        </div>
        <form action="" className='bg-white p-[24px] flex flex-col'>
            <h1 className='text-[24px] mb-[1rem] font-[800]'>Log In</h1>
            <h3 className='text-[16px] mb-[5px]'>Email Address</h3>
            <input className='text-[16px] py-[8px] px-[12px] mb-[5px] border border-gray-300 rounded-[5px] focus-within:outline-2 focus-within:outline-[#2B59E3]'
            type="text" 
            placeholder='Enter email address' />
            <h3 className='text-[16px] mb-[5px]'>Password</h3>
            <input className='text-[16px] py-[8px] px-[12px] mb-[5px] border border-gray-300 rounded-[5px] focus-within:outline-2 focus-within:outline-[#2B59E3]'
            type="password" 
            placeholder='Enter your password' />
            <button className='w-full py-[12px] px-[16px] bg-[#2B59E3] text-[16px] font-[700] text-white mt-[1rem] mb-[15px] cursor-pointer'>Continue</button>
            <p className='text-[16px] flex gap-[10px] self-center'>New to Mantra ? <u className='font-[700] text-[#2B59E3] cursor-pointer'>Sign Up</u></p>
        </form>
      </div>
    </div>
  )
}
