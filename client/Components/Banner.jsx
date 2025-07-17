import Button from '@mui/material/Button';

export default function Banner({ data }) {
    return (
        <div className='flex banner-bg bg-[#F7F9FF] pt-[7rem]'>
            <div className='w-[55vw] mt-[4rem] pl-[8rem]'>
                <h2 className='text-[#2B59E3] text-[22px] font-[700] mb-[1rem]'>{data.TabName}</h2>
                <h1 className='text-[70px] font-[400] leading-[0.9] dm-serif' dangerouslySetInnerHTML={{ __html: data.HeadingMessage }} />
                <p className='text-[18px] text-[#35405F] mt-[1rem]' dangerouslySetInnerHTML={{ __html: data.ParaMessage }} />
                <div className='mt-[2.5rem] flex gap-[1rem]'>
                    {data.SolidButton && (
                        <Button variant="contained" sx={{ width: "12rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#2B59E3" }}>{data.SolidButton}</Button>
                    )}
                    {data.OutlineButton && (
                        <Button variant="text" sx={{ width: "12rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "none", color: "#2B59E3", }}>{data.OutlineButton}</Button>
                    )}
                </div>
            </div>
            <div className='w-[45vw]'>
                <img className='w-[90%]' src={`./Assets/${data.BannerImageName}`} alt="" />
            </div>
        </div>
    )
}
