import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { IoAlertCircleOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <div className="w-screen bg-[#171F36] px-[8rem] py-[48px]">
            <div className="w-full  flex justify-between">
                <div className="text-white flex flex-col gap-[16px]">
                    <div className="flex gap-[4rem] items-center">
                        <h1 className="text-[35px] lora font-[500]">Mantra Health</h1>
                        <ul className="flex gap-[1.5rem]">
                            <li><FiLinkedin className="w-[20px] h-[20px]" /></li>
                            <li><FaInstagram className="w-[20px] h-[20px]" /></li>
                            <li><RiTwitterLine className="w-[20px] h-[20px]" /></li>
                            <li><FiYoutube className="w-[20px] h-[20px]" /></li>
                        </ul>
                    </div>
                    <ul className="flex justify-between items-center">
                        <li className="text-[15px] font-[500]">About</li>
                        <li className="text-[15px] font-[500]">Our Solutions</li>
                        <li className="text-[15px] font-[500]">Careers</li>
                        <li className="text-[15px] font-[500]">For Providers</li>
                        <li className="text-[15px] font-[500]">FAQ</li>
                        <li className="text-[15px] font-[500]">Blog</li>
                    </ul>
                </div>
                <ul className="flex flex-end gap-[5px]">
                    <li><img src="./Assets/HIPAA-White.webp" alt="" className="w-[96px] h-[96px] object-contain" /></li>
                    <li><img src="./Assets/SOC-2-White.webp" alt="" className="w-[96px] h-[96px] object-contain" /></li>
                    <li><img src="./Assets/TX-RAMP.webp" alt="" className="w-[95px] h-[95px] object-contain" /></li>
                </ul>
            </div>
            <div className="w-full h-px bg-gray-700 mt-[40px]"></div>
            <div className="text-white w-full flex items-center justify-between py-[24px]">
                <div className="flex gap-[10px] items-center">
                    <IoAlertCircleOutline className="text-[#CB4848] text-[26px]"/>
                    <p className="text-14px]">If you or a loved one is in emotional distress,<br /> here are some resources</p>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="flex flex-col">
                    <h5 className="text-[16px] font-[500]">Suicide and Crisis Lifeline</h5>
                    <p className="text-[14px]">Call or text 9-8-8 (Available 24/7)</p>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="flex gap-[15rem] items-center">
                    <span>
                        <h5 className="text-[16px] font-[500]">Crisis Text Line</h5>
                        <p className="text-[14px]">Text HOME to 741741</p>
                    </span>
                    <button className="bg-[#CB4848] py-[16px] px-[24px] font-[600] rounded-[60px] cursor-pointer">Crisis Resources</button>
                </div>
            </div>
            <div className="w-full h-px bg-gray-700"></div>
            <div className="flex justify-between items-center mt-[48px]">
                <ul className="flex items-center gap-[1rem] ">
                   <li><img src="./Assets/Mantra-Icon-Reverse.png" className="w-[41px] h-[32px] object-contain" alt="" /></li> 
                    <li className="text-[14px] text-[#A6ACC6] font-[600]">Privacy Policy</li>
                    <li className="text-[14px] text-[#A6ACC6] font-[600]">Terms & Conditions</li>
                    <li className="text-[14px] text-[#A6ACC6] font-[600]">Telehealth Consent</li>
                </ul>
                <p className="text-[14px] text-[#A6ACC6] font-[600]">© Mantra Health, Inc. 2025</p>
            </div>
        </div>
    )
}
