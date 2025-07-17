import BlogItem from './BlogItem'
import { BlogItemsHeadings } from '../../Data/BlogItemsHeadings'

export default function Blogs() {
    return (
        <div className='pt-[7rem] pb-[5rem] w-[100vw] px-[5rem] bg-[#F7F9FF]'>
            <div className='relative'>
                <img src="./Assets/wellness-programs.webp" className='w-[45vw] h-fit object-contain rounded-xl' alt="" />
                <div className='flex flex-col gap-[1rem] w-[45vw] h-fit p-[48px] bg-white shadow-md rounded-xl absolute right-[3vw] top-[8vh]'>
                    <div className='flex gap-[15px]'>
                        <h1 className='text-[#2B59E3] text-[16px] font-[600]'>Blog Post</h1>
                        <h2 className='text-[#55607E] text-[16px] font-[600]'>Jun 18 2025</h2>
                    </div>
                    <h1 className='text-[40px] dm-serif leading-[0.9]'>The Role of Student Wellness Programs in Higher Education</h1>
                    <p className='text-[#35495F] text-[16px] leading-[1.4]'>Find out how student wellness programs, ranging from mental health support to financial literacy, are helping college students thrive academically, emotionally, and socially.</p>
                    <button className='w-[140px] h-[55px] text-[16px] bg-[#2B59E3] text-white font-[600] rounded-[30px]'>Read More</button>
                </div>
            </div>
            <div className='pt-[3rem] w-[100%] flex gap-[1.5rem]'>
                <div className='w-[60%]'>
                    {BlogItemsHeadings?.map((item,index)=>(
                        <BlogItem heading={item} key={index}/>
                    ))}
                </div>
                <div className='w-[30%]'>

                </div>
            </div>
        </div>
    )
}
