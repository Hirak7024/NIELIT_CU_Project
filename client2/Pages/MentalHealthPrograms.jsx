import Banner from "../Components/Banner";
import { mentalHealthPrograms_Page_Banner } from "../Data/BannerData.js";
import { mentalHealthProgramsData } from "../Data/mentalHealthProgramsData.js";
import Button from "@mui/material/Button";

export default function MentalHealthPrograms() {
    return (
        <div>
            <Banner data={mentalHealthPrograms_Page_Banner} />
            <div className='w-full px-[16rem] py-[3rem] bg-[#F7F9FF]'>
                {mentalHealthProgramsData?.Introduction?.map((item, index) => (
                    <p key={index} className='text-[#35405F] text-[16px] mb-[20px]'>
                        {item}
                    </p>
                ))}
                <h1 className='text-[38px] dm-serif font-[500] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.Heading1}</h1>
                {mentalHealthProgramsData?.Data1?.map((item, index) => (
                    <p key={index} className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: item }} />
                ))}
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading1}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData1 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading2}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData2 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading3}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData3 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading4}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData4 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading5}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData5 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading6}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData6 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading7}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData7 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading8}</h2>
                {mentalHealthProgramsData?.SubData8?.map((item, index) => (
                    <p key={index} className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: item }} />
                ))}
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading9}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData9 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading10}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData10 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading11}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData11 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading12}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData12 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading13}</h2>
                <p className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: mentalHealthProgramsData?.SubData13 }} />
                <h2 className='text-[24px] font-[700] mb-[16px] text-[#1D2744]'>{mentalHealthProgramsData?.SubHeading14}</h2>
                {mentalHealthProgramsData?.SubData14?.map((item, index) => (
                    <p key={index} className='text-[#35405F] text-[16px] mb-[20px]' dangerouslySetInnerHTML={{ __html: item }} />
                ))}
                <h1 className='text-[38px] dm-serif font-[500] mb-[16px] text-[#1D2744]'>The benefits of comprehensive mental health programs for college students </h1>
                <p className='text-[#35405F] text-[16px] mb-[20px]'>When a students’ mental health needs are met and they are equipped with the right tools and resources needed to cope with life’s challenges, they are more likely to achieve academic success and graduate on time. It’s in an institution’s best interest to provide students with a wide range of clinical and non-clinical support services.</p>
                <p className='text-[#35405F] text-[16px] mb-[20px]'>The best college mental health programs support the entire student body. While not every student has a clinical need, nearly all would benefit from more support, including those who are high achieving. In addition to offering in-person counseling services, institutions should consider virtual clinical and non-clinical options.</p>
                <p className='text-[#35405F] text-[16px] mb-[20px]'>Institutions can also offer support to faculty and staff, who often come face-to-face with students who are undergoing mental health challenges. This could include Mental Health First Aid training, other crisis and suicide prevention trainings, as well as a faculty and staff crisis line, which helps connect students to essential services.</p>
                <p className='text-[#35405F] text-[16px] mb-[20px]'>Promoting student mental health and building a comprehensive mental health program, which accounts for the varied needs of the student, will lead to positive outcomes, including:</p>
                <ul className='mb-[20px] flex flex-col gap-[5px] list-disc pl-[3rem]'>
                    <li>Improved academic performance and reduced dropout rates.⁵</li>
                    <li>Enhanced student well-being and quality of life.</li>
                    <li>Reduction in mental health crises and hospitalizations.</li>
                    <li>A more inclusive and supportive campus culture.</li>
                </ul>
                <p className='text-[#35405F] text-[16px] mb-[20px]'>By prioritizing mental health programs, institutions can create an environment where all students have the resources and tools they need to thrive. Whether through clinical care, peer support, faculty training, or proactive well-being initiatives, investing in student mental health fosters academic success, personal growth, and a stronger campus community.</p>
                <h1 className='text-[38px] dm-serif font-[500] mb-[16px] text-[#1D2744]'>Meet the evolving mental health needs of students</h1>
                <p className='text-[#35405F] text-[16px] mb-[20px]'>As students’ mental health and wellness needs continue to evolve, so too must campus mental health programs. The future of student well-being will be shaped by innovative digital tools, AI-driven support, and expanded <u className="text-blue-700">crisis intervention teams</u> that provide timely, effective care. Institutions that embrace these advancements will be better positioned to proactively address mental health challenges, ensuring that students receive the proper level of support they need at the moment they need it.</p>
                <p className='text-[#35405F] text-[16px] mb-[20px]'>By investing in comprehensive mental health initiatives and prioritizing these efforts, colleges and universities can make a <u className="text-blue-700">lasting impact on student success</u> and well-being – and contribute to a more resilient campus community.</p>
                <p className='text-[#35405F] text-[16px] mb-[20px]'>Understanding the importance of providing students with a comprehensive mental health program, Mantra Health offers everything from self-guided wellness courses and one-on-one coaching to virtual psychiatry and 24/7 crisis care.</p>
                 <div className='flex justify-between items-center my-[50px] py-[24px] px-[32px] reviews-bg w-full h-[102px] '>
                    <h1 className='text-[20px] font-[600]'>Get connected with Mantra Health today</h1>
                    <Button variant="contained" sx={{ width: "12rem", textTransform: "none", fontSize: "18px", padding: "14px 20px", fontWeight: "600", borderRadius: "100rem", boxShadow: "none", backgroundColor: "#2B59E3" }}>Get in Touch</Button>
                </div>
            </div>
        </div>
    )
}
