import Banner from '../Components/Banner';
import { studentMentalHealth_Page_Banner } from '../Data/BannerData.js';
import { studentMentalHealthData } from '../Data/studentMentalHealthData.js';
import Button from '@mui/material/Button';

export default function StudentMentalHealth() {
    return (
        <div>
            <Banner data={studentMentalHealth_Page_Banner} />
            <div className='w-full px-[16rem] py-[3rem] bg-[#F7F9FF]'>
                {studentMentalHealthData?.Introduction?.map((item, index) => (
                    <p key={index} className='text-[#35405F] text-[16px] mb-[20px]'>
                        {item}
                    </p>
                ))}
                <h1 className='text-[38px] dm-serif font-[500] mb-[16px] text-[#1D2744]'>{studentMentalHealthData?.Heading1}</h1>
                {studentMentalHealthData?.Data1?.map((item, index) => (
                    <p key={index} className='text-[#35405F] text-[16px] mb-[20px]'>
                        {item}
                    </p>
                ))}
                <h1 className='text-[38px] dm-serif font-[500] mb-[16px] text-[#1D2744]'>{studentMentalHealthData?.Heading2}</h1>
                <p className='text-[#35405F] text-[16px] mb-[20px]'>{studentMentalHealthData?.Data2?.Para1}</p>
                <p className='text-[#35405F] text-[16px] mb-[20px]'>{studentMentalHealthData?.Data2?.Para2}</p>
                <ul className='mb-[20px] flex flex-col gap-[5px] list-disc pl-[3rem]'>
                    {studentMentalHealthData?.Data2?.UnOrderedList?.map((item, index) => (
                        <li key={index} className='text-[#35405F] text-[16px]'>{item}</li>
                    ))}
                </ul>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: studentMentalHealthData?.Data2?.Para3 }} />
                <h1 className='text-[38px] dm-serif font-[500] mb-[16px] text-[#1D2744]'>{studentMentalHealthData?.Heading3}</h1>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: studentMentalHealthData?.Data3?.Para1 }} />
                <ul className='mb-[20px] flex flex-col gap-[5px] list-disc pl-[3rem]'>
                    {studentMentalHealthData?.Data3?.UnorderedList?.map((item, index) => (
                        <li key={index} className='text-[#35405F] text-[16px]' dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: studentMentalHealthData?.Data3?.Para2 }} />
                <h1 className='text-[38px] dm-serif font-[500] mb-[16px] text-[#1D2744]'>{studentMentalHealthData?.Heading4}</h1>
                {studentMentalHealthData?.Data4?.map((item, index) => (
                    <p key={index} className='text-[#35405F] text-[16px] mb-[20px]'>{item}</p>
                ))}
                <div className='flex justify-between items-center my-[50px] py-[24px] px-[32px] reviews-bg w-full h-[102px] '>
                    <h1 className='text-[20px] font-[600]'>Get connected with Mantra Health today</h1>
                    <Button variant="contained" sx={{ width: "12rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#2B59E3" }}>Get in Touch</Button>
                </div>
            </div>
        </div>
    )
}
