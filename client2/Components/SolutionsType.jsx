import React from 'react'

export default function SolutionsType() {
    return (
        <div className='w-screen px-[6rem] py-[3rem]'>
            <ul className='flex gap-[10px] items-center'>
                <li className='py-[12px] px-[16px] bg-[#E0E7FF] text-[16px] font-[600] rounded-[4px]'>Expand Care</li>
                <li className='py-[12px] px-[16px] bg-[#E0E7FF] text-[16px] font-[600] rounded-[4px]'>Manage Crises</li>
                <li className='py-[12px] px-[16px] bg-[#E0E7FF] text-[16px] font-[600] rounded-[4px]'>Promote Wellness</li>
                <li className='py-[12px] px-[16px] bg-[#E0E7FF] text-[16px] font-[600] rounded-[4px]'>Prevent Escalation</li>
            </ul>
            <div className='w-full reviews-bg mt-[10px] rounded-[7px]'>
                <div className='w-full flex'>
                    <span className='w-[65%] pl-[3rem] py-[2rem]'>
                        <div className='m-0 p-0'>
                            <h1 className='dm-serif text-[40px] font-[500] mb-[10px]'>Expand Care</h1>
                            <p className='text-[18px] mb-[20px] text-[#35405F]'>Bring accessible, evidence-based, one-on-one clinical care to students through a 50-state, dedicated provider network. With a holistic, whole-person approach, you can foster better mental health outcomes and higher satisfaction rates. </p>
                        </div>
                        <div className='flex justify-between gap-[2.5rem] mt-[2rem]'>
                            <span className='flex flex-col'>
                                <img src="./Assets/mantra-solution-therapy.webp" className='w-[24px] h-[24px] object-contain mb-[15px]' alt="" />
                                <h5 className='text-[16px] font-[600] mb-[15px]'>Therapy</h5>
                                <p className='text-[16px] text-[#35405F]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsa quaerat labore. Ad libero excepturi id atque harum sed officia iure facere et dolor repellat rerum vero, rem, blanditiis commodi.</p>
                            </span>
                            <span className='flex flex-col'>
                                <img src="./Assets/mantra-solution-psychiatry.webp" className='w-[24px] h-[24px] object-contain mb-[15px]' alt="" />
                                <h5 className='text-[16px] font-[600] mb-[15px]'>Psychiatry</h5>
                                <p className='text-[16px] text-[#35405F]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsa quaerat labore. Ad libero excepturi id atque harum sed officia iure facere et dolor repellat rerum vero, rem, blanditiis commodi.</p>
                            </span>
                        </div>
                    </span>
                    <span className='w-[35%]'>
                        <img src="./Assets/expand-care.webp" className='w-full object-contain' alt="" />
                    </span>
                </div>
                <div className='w-full'>
                    <span>

                    </span>
                    <span>

                    </span>
                </div>
            </div>
        </div>
    )
}
