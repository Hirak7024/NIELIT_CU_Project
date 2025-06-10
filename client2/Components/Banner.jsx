import Button from '@mui/material/Button';

export default function Banner() {
    return (
        <div className='flex'>
            <div className='w-[55vw] mt-[4rem] pl-[8rem]'>
                <h2 className='text-[#2B59E3] text-[22px] font-[700] mb-[1rem]'>Home</h2>
                <h1 className='text-[70px] font-[400] leading-[0.9] dm-serif'>Student success starts <br/> with <em>mental health.</em> </h1>
                <p className='text-[18px] text-[#35405F] mt-[1rem]'>Mantra Health partners with higher education institutions to provide <br/> students with comprehensive, high-quality mental health and wellness <br/> solutions.</p>
                <div className='mt-[2.5rem] flex gap-[1rem]'>
                    <Button variant="contained" sx={{ width: "12rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#2B59E3" }}>Get In Touch</Button>
                    <Button variant="text" sx={{ width: "12rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "none", color: "#2B59E3", }}>Our Solutions </Button>
                </div>
            </div>
            <div className='w-[45vw]'>
                <img className='w-[90%]' src="./Assets/femaleStudent.webp" alt="" />
            </div>
        </div>
    )
}
