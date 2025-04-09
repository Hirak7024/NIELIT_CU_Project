import React from 'react';
import PdfContainer from '../Components/PdfContainer/PdfContainer';
import { useNavigate } from 'react-router-dom';
import YouTubeSection from '../Components/YoutubeSection';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className='w-screen h-screen bg-amber-50'>
            <div className='flex pl-[5rem] pt-[3rem] gap-[4rem] justify-center'>
                <PdfContainer />
                <div className='w-[35vw] h-50vh]'>
                    <div>
                        <img src="./Assets/Images/FormImage2.gif" className='w-full h-full object-contain cursor-pointer' alt=""
                            onClick={() => navigate("/form")} />
                    </div>
                    <h2 className='text-[23px] text-center font-semibold mt-[0.5rem]'>Consultation Form</h2>
                </div>
            </div>
            <YouTubeSection/>
        </div>
    )
}
