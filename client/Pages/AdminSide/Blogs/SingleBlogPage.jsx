import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function SingleBlogPage() {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/blogs/blog/${id}/`)
                setBlog(response.data)
                console.log(response.data);
            } catch (error) {
                console.error('Failed to fetch blog:', error)
            }
        }

        fetchBlog()
    }, [id])

    if (!blog) return <div className="p-10">Loading...</div>

    // Function to format date like "August 4 2025"
    const formatDate = (isoDate) => {
        const date = new Date(isoDate)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    }

    const handleBlogDelete=async()=>{
        console.log("Delete Button is Clicked")
        try {
            const response = await axios.post("http://127.0.0.1:8000/blogs/blog/delete/", {blog_id:id});
            console.log(response.data.message);
            toast.success(response.data.message);
            navigate("/adminSide/allBlogs");
        } catch (error) {
            console.error(error.response.data.message);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className='w-full h-fit ml-[20rem] px-[5rem] py-[3rem] bg-[#F7F9FF] relative top-0 left-0'>
            <div className='absolute right-[2rem] top-[2rem] flex gap-[1rem]'>
                <button className='bg-blue-700 text-white font-[600] text-[17px] w-[8rem] h-[2.5rem] rounded-[5px] cursor-pointer hover:bg-white hover:text-blue-700 hover:border-[2px] hover:border-blue-700'
                onClick={() => navigate(`/adminSide/editBlogPage/${blog.id}`)}
                >Edit</button>
                <button className='bg-red-600 text-white font-[600] text-[17px] w-[8rem] h-[2.5rem] rounded-[5px] cursor-pointer hover:bg-white hover:text-red-600 hover:border-[2px] hover:border-red-600'
                onClick={() =>handleBlogDelete()}
                >Delete</button>
                </div>
            <div className='w-full flex gap-[3rem] mb-[3rem]'>
                <img src={blog?.image_url} alt="Blog Visual" className='w-[320px] h-[320px] object-cover rounded-[10px]' />
                <div>
                    <div className='flex gap-[15px] mb-[16px]'>
                        <h1 className='text-[#2B59E3] text-[16px] font-[600]'>Blog Post</h1>
                        <h2 className='text-[#55607E] text-[16px] font-[600]'>{formatDate(blog?.created_at)}</h2>
                    </div>
                    <h1 className='text-[60px] dm-serif font-[400] leading-[0.9] mb-[20px]'>{blog?.heading}</h1>
                    <h2 className='text-[16px] text-[#35405F] mb-[20px]'>{blog?.subheading}</h2>
                    <hr className='text-gray-300' />
                </div>
            </div>
            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </div>
    )
}
