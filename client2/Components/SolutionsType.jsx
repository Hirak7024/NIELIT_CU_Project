import { useState } from "react"
import { SolutionTypeData } from "../Data/SolutionTypeData"

export default function SolutionsType() {
    const [selected, setSelected] = useState(SolutionTypeData[0])  // Default to first item
    return (
        <div className='w-screen px-[8rem] py-[3rem]'>
            <ul className='flex gap-[10px] items-center'>
                {SolutionTypeData?.map((item, index) => (
                    <li key={index} onClick={() => setSelected(item)} className={`py-[12px] px-[16px] text-[16px] font-[600] rounded-[4px] cursor-pointer transition-all duration-200
            ${selected === item ? "bg-[#1D2744] text-white" : "bg-[#E0E7FF] text-black"}
          `}>{item.SolutionName}</li>
                ))}
            </ul>
            <div className='w-full reviews-bg mt-[10px] rounded-[10px]'>
                <div className='w-full flex'>
                    <span className='w-[65%] px-[3rem] py-[2rem]'>
                        <div className='m-0 p-0'>
                            <h1 className='dm-serif text-[40px] font-[500] mb-[10px]'>{selected.SolutionName}</h1>
                            <p className='text-[18px] mb-[20px] text-[#35405F]'>{selected.Details}</p>
                        </div>
                        <div className='flex justify-between gap-[3rem] mt-[2rem]'>
                            <span className='flex flex-col'>
                                <img src={`./Assets/${selected.Image1}`} className='w-[24px] h-[24px] object-contain mb-[15px]' alt="" />
                                <h5 className='text-[16px] font-[600] mb-[15px]'>{selected.Method1}</h5>
                                <p className='text-[16px] text-[#35405F]'>{selected.Detail1}</p>
                            </span>
                            <span className='flex flex-col'>
                                <img src={`./Assets/${selected.Image2}`} className='w-[24px] h-[24px] object-contain mb-[15px]' alt="" />
                                <h5 className='text-[16px] font-[600] mb-[15px]'>{selected.Method2}</h5>
                                <p className='text-[16px] text-[#35405F]'>{selected.Detail2}</p>
                            </span>
                        </div>
                    </span>
                    <span className='w-[35%]'>
                        <img src={`./Assets/${selected.MainImage}`} className='w-full object-contain' alt="" />
                    </span>
                </div>
                <div className='w-full flex justify-between bg-[#1D2744] p-[24px] items-center text-white rounded-b-[10px]'>
                    <h1 className="text-[20px] font-[600]">Looking for detailed information on our products and services?</h1>
                    <button className="py-[16px] px-[24px] bg-[#2B59E3] text-[16px] font-[600] rounded-[40px]">Download brochure</button>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[2rem] mb-[3rem]">
                <h1 className="text-[64px] dm-serif text-center py-[50px]">An <em>integrated system</em> of care</h1>
                {/* Campus Activation */}
                <div className="flex w-full">
                    <img src="./Assets/campus-activation-mockup-2.webp" className="w-[45%]" alt="" />
                    <span className="w-[55%] flex flex-col ml-[5rem] justify-center">
                        <h4 className="text-[#2B59E3] text-[16px] font-[700] mb-[8px]">Campus Activation</h4>
                        <h1 className="text-[40px] dm-serif leading-[0.9] mb-[16px]">Higher utilization rates and greater <em>student satisfaction</em></h1>
                        <p className="text-[#35405F] text-[16px] margin-[20px]">Through close collaboration with campus stakeholders, our dedicated campus marketing team provides successful promotional activities, aiding in high utilization rates.</p>
                        <button className="mt-[5rem] w-[12rem] py-[16px] px-[24px] bg-[#2B59E3] text-white text-[16px] font-[600] rounded-[40px]">Get in Touch</button>
                    </span>
                </div>
                {/* Care Navigation */}
                <div className="flex w-full">
                    <span className="w-[55%] flex flex-col mr-[5rem] justify-center">
                        <h4 className="text-[#2B59E3] text-[16px] font-[700] mb-[8px]">Care Navigation</h4>
                        <h1 className="text-[40px] dm-serif leading-[0.9] mb-[16px]">Connecting students with the <em>right</em> level of care</h1>
                        <p className="text-[#35405F] text-[16px] margin-[20px]">Through a dedicated care navigation team, as well as streamlined assessments for diagnoses and referrals, we ensure no student slips through the cracks.</p>
                        <button className="mt-[5rem] w-[12rem] py-[16px] px-[24px] bg-[#2B59E3] text-white text-[16px] font-[600] rounded-[40px]">Schedule a Demo</button>
                    </span>
                    <img src="./Assets/care-nav-mockup.webp" className="w-[45%]" alt="" />
                </div>
                {/* Mantra's Mobile App */}
                <div className="flex w-full">
                    <img src="./Assets/mobile-app-mockup.webp" className="w-[45%]" alt="" />
                    <span className="w-[55%] flex flex-col ml-[5rem] justify-center">
                        <h4 className="text-[#2B59E3] text-[16px] font-[700] mb-[8px]">Mantra’s Mobile App</h4>
                        <h1 className="text-[40px] dm-serif leading-[0.9] mb-[16px]">24/7 support <em>across</em>  the care continuum</h1>
                        <p className="text-[#35405F] text-[16px] margin-[20px]">Students have easy and immediate access to mental and wellness services built within a stepped care model so those in need of clinical support are met with efficient and effective care delivery.</p>
                        <button className="mt-[5rem] w-[12rem] py-[16px] px-[24px] bg-[#2B59E3] text-white text-[16px] font-[600] rounded-[40px]">Get in Touch</button>
                    </span>
                </div>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
            <div className="w-full flex items-center justify-between">
                <span className="flex gap-[2rem] items-center">
                    <h1 className="text-[64px] dm-serif">85%</h1>
                    <p className="text-[#35405F] text-[16px]">of student patients would recommend Mantra to a friend or classmate</p>
                </span>
                <img src="./Assets/Promote-Wellness-illustration.webp" alt="" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="w-full h-px bg-gray-300"></div>
            <div className="flex w-full mt-[3rem]">
                <span className="w-[55%] flex flex-col mr-[5rem] justify-center">
                    <h4 className="text-[#2B59E3] text-[16px] font-[700] mb-[8px]">Mantra Collaboration Portal</h4>
                    <h1 className="text-[40px] dm-serif leading-[0.9] mb-[16px]"><em>Real-time</em> communication and clinical support</h1>
                    <p className="text-[#35405F] text-[16px] margin-[20px]">The first and only proprietary Collaboration Portal that streamlines referrals, reinforces clinical collaboration, and gives clinical staff visibility into student care plans.</p>
                    <button className="mt-[5rem] w-[12rem] py-[16px] px-[24px] bg-[#2B59E3] text-white text-[16px] font-[600] rounded-[40px]">Get in Touch</button>
                </span>
                <img src="./Assets/MCP-solution-mock.webp" className="w-[45%]" alt="" />
            </div>
            <div className="w-full py-[96px]">
                <h1 className="text-[40px] dm-serif font-[500] mb-[16px]">High-touch collaboration and support </h1>
                <div className="flex justify-between gap-[1rem] mt-[2rem]">
                    <span>
                        <img src="./Assets/partner-success.webp" className="w-[48px] h-[48px] object-contain mb-[32px]" alt="" />
                        <h1 className="text-[24px] mb-[16px] font-[600]">Partner Success</h1>
                        <p className="text-[16px] text-[#35405F] font-[500]">Customer support from a skilled team of experts who aid in implementation, platform setup, training, and client management.</p>
                    </span>
                    <span>
                        <img src="./Assets/campus-activation.webp" className="w-[48px] h-[48px] object-contain mb-[32px]" alt="" />
                        <h1 className="text-[24px] mb-[16px] font-[600]">Campus Activation</h1>
                        <p className="text-[16px] text-[#35405F] font-[500]">Mantra’s marketing team collaborates with campus stakeholders to deliver tailored marketing campaigns that build awareness and increase utilization.</p>
                    </span>
                    <span>
                        <img src="./Assets/provider-network.webp" className="w-[48px] h-[48px] object-contain mb-[32px]" alt="" />
                        <h1 className="text-[24px] mb-[16px] font-[600]">Provider Network</h1>
                        <p className="text-[16px] text-[#35405F] font-[500]">We support real-time collaborations with our in-house network of specialized and highly trained clinical providers and higher education experts.</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
