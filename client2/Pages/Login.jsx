import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import { Context } from "../Utils/Context";

export default function Login() {
    const { setLoggedInUser } = useContext(Context);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };


    const loginUser = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/auth/userSide/login/", formData);
            // console.log(response)
            const userData = {
                Name: response.data.name,
                Email: response.data.email,
                SessionId: response.data.session_id
            };

            setLoggedInUser(userData);
            localStorage.setItem("loggedInUser", JSON.stringify(userData));  // Store persistently

            toast.success(response.data.message);
            navigate("/");
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.error)
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginUser();
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-[#F7F9FF]'>
            <div className='w-[468px] shadow-md'>
                <div className='flex flex-col justify-between w-full h-[220px] p-[24px] bg-[#1D2744] banner-bg text-white'>
                    <div className='flex items-center gap-[1rem]'>
                        <img src="./Assets/Mantra-Icon-Reverse.png" className='w-[24px] h-[24px] object-contain' alt="" />
                        <h3 className='dm-serif text-[24px] font-[400]'>Mantra Health</h3>
                    </div>
                    <h1 className='dm-serif text-[48px] leading-[0.9]'>School-sponsored <br /> mental health care.</h1>
                </div>
                <form onSubmit={handleSubmit} className='bg-white p-[24px] flex flex-col'>
                    <h1 className='text-[24px] mb-[1rem] font-[900]'>Log In</h1>
                    <h3 className='text-[16px] mb-[5px]'>Email</h3>
                    <input className='text-[16px] py-[8px] px-[12px] mb-[5px] border border-gray-300 rounded-[5px] focus-within:outline-2 focus-within:outline-[#2B59E3]'
                        type="text"
                        placeholder='Enter email address'
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
                    <p className='text-[16px] flex gap-[10px] self-center'>New to Mantra ? <u onClick={() => navigate("/signup")} className='font-[700] text-[#2B59E3] cursor-pointer'>Sign Up</u></p>
                </form>
            </div>
        </div>
    )
}
