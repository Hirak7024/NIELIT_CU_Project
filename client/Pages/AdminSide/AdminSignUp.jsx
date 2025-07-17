import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminSignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };


    const SignUpUser = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/auth/adminSide/register/", formData);
            console.log(response);
            toast.success(response.data.message);
            navigate("/adminSide");
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await SignUpUser();
    };


    return (
        <div className='w-screen h-screen flex items-center justify-center bg-[#1D2744] banner-bg'>
            <div className='w-[468px] shadow-md'>
                <div className='flex flex-col justify-between w-full h-[220px] p-[24px] text-black bg-[#dee3f8]'>
                    <div className='flex items-center gap-[1rem]'>
                        <img src="/Assets/MantraIcon.png" className='w-[24px] h-[24px] object-contain' alt="" />
                        <h3 className='dm-serif text-[24px] font-[400]'>Mantra Health</h3>
                    </div>
                    <h1 className='dm-serif text-[48px] leading-[0.9]'>School-sponsored <br /> mental health care.</h1>
                </div>
                <form onSubmit={handleSubmit} className='bg-white p-[24px] flex flex-col'>
                    <h1 className='text-[24px] mb-[1rem] font-[900]'>Admin Sign Up</h1>
                    <h3 className='text-[16px] mb-[5px]'>Email</h3>
                    <input className='text-[16px] py-[8px] px-[12px] mb-[5px] border border-gray-300 rounded-[5px] focus-within:outline-2 focus-within:outline-[#2B59E3]'
                        type="text"
                        placeholder='Enter your email address'
                        id='Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange} />
                    <h3 className='text-[16px] mb-[5px]'>Password</h3>
                    <input className='text-[16px] py-[8px] px-[12px] mb-[5px] border border-gray-300 rounded-[5px] focus-within:outline-2 focus-within:outline-[#2B59E3]'
                        type="password"
                        placeholder='Enter your password'
                        id='Password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange} />
                    <button type="submit" className='w-full py-[12px] px-[16px] bg-[#2B59E3] text-[16px] font-[700] text-white mt-[1rem] mb-[15px] cursor-pointer'>Continue</button>
                    <p className='text-[16px] flex gap-[10px] self-center'>Already have an account ? <u onClick={() => navigate("/adminSide")} className='font-[700] text-[#2B59E3] cursor-pointer'>Sign In</u></p>
                </form>
            </div>
        </div>
    )
}
