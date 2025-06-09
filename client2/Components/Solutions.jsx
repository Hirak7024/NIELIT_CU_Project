import React from 'react';
import Button from '@mui/material/Button';
import { solutions } from '../Data/SolutionsComponent';
import { RiArrowRightWideLine } from "react-icons/ri";

export default function Solutions() {
    return (
        <div className="flex flex-col flex-row gap-10 px-[8rem] py-[4rem]">
            {/* Left Section */}
            <div className="w-full md:w-1/3">
                <h1 className="dm-serif text-[40px] text-[#1D2744] leading-[0.9] mb-[1rem]">
                    Serve your <em>entire</em> <br /> student body.
                </h1>
                <p className="text-[16px] text-[#35405F] mb-[2rem]">
                    Reach underserved student populations and <br />
                    provide 24/7 support across every stage of the <br />
                    mental health journey.
                </p>
                <Button
                    variant="contained"
                    sx={{
                        width: '15rem',
                        textTransform: 'none',
                        fontSize: '18px',
                        padding: '14px 18px',
                        fontWeight: '600',
                        borderRadius: '100rem',
                        boxShadow: 'none',
                        backgroundColor: '#2B59E3',
                    }}
                >
                    Explore Solutions
                </Button>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer">
                {solutions.map((item, index) => (
                    <div key={index} className="flex gap-[1rem] bg-[#E0E7FF] p-6 rounded-lg">
                        <div>
                            <h1 className="text-[20px] mb-4 font-semibold">{item.Heading}</h1>
                            <p className="text-[16px]">{item.Para}</p>
                        </div>
                        <div className='flex items-center justify-center'>
                        <RiArrowRightWideLine className='text-[23px]'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
