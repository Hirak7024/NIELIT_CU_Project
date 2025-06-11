import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import { reviews } from '../Data/Reviews';
import { reviews2 } from '../Data/Reviews';

export default function Reviews() {
  return (
    <div className='w-[100vw] h-[96rem] flex flex-col items-center justify-between bg-[#F7F9FF] pt-[3rem] relative top-0 left-0'>
      <div className='w-[1000px] h-[896px] reviews-bg rounded-lg flex flex-col items-center py-[48px] px-[160px]'>
        <h1 className='text-[64px] dm-serif leading-[0.9] text-center mb-[4rem]'>Proven to help students <br /><em>stay in school.</em></h1>
        <img src="./Assets/Retention-highlight-image.webp" alt="" className='w-[680px] h-[283px]' />
        <p className='text-[16px] mt-[1rem] mb-[2.5rem] text-center'>Among students with high dropout risk, 70% saw improvements after engaging in Mantra <br /> services, and 61% dropped to low risk. With so many factors contributing to a student’s <br /> dropout risk, it’s clear Mantra makes a difference.</p>
        <Button variant="contained" sx={{ width: "12rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#2B59E3" }}>Get in Touch</Button>
      </div>
      <div className='w-[100vw] flex justify-center gap-[2rem] px-[5rem] pb-[2rem] absolute left-0 top-[50rem]'>
        {reviews?.map((items, index) => (
          <div key={index} className='w-[412px] h-[284px] flex flex-col justify-between bg-white shadow-lg rounded-lg'>
            <div className='px-[32px] pt-[25px]'>
              <Rating name="read-only" sx={{ marginBottom: "20px" }} value={5} readOnly />
              <p className='text-[16px]'>{items.Review}</p>
            </div>
            <div className='flex items-center banner-bg bg-gray-50 h-[4rem] px-[32px]'>
              <Avatar src={`./Assets/${items.Avatar}`} sx={{ width: '32px', height: '32px', marginRight: "20px" }} />
              <p className='text-[16px]'>{items.Person}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-[100vw] flex flex-col items-center absolute left-0 top-[72rem]'>
        <div className='w-[1300px] h-[200px] flex items-center py-[20px] bg-[#1D2744] banner-bg'>
          {reviews2?.map((items,index)=>(
            <div key={index} className='px-[32px] flex flex-col items-center justify-center'>
              <h1 className='text-[56px] dm-serif text-white'>{items.Heading}</h1>
              <p className='text-[14px] text-white text-center'>{items.Para}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-between items-center py-[24px] px-[32px] reviews-bg w-[1300px] h-[102px] '>
            <h1 className='text-[20px] font-[600]'>Expand your offerings today.</h1>
            <Button variant="contained" sx={{ width: "12rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#2B59E3" }}>Get in Touch</Button>
        </div>
      </div>
    </div>
  )
}
