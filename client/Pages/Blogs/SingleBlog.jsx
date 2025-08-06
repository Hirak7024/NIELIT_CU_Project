import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function SingleBlog() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

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

  return (
    <div className='w-screen px-[8rem] py-[10rem] bg-[#F7F9FF]'>
      <div className='w-[100%] flex gap-[3rem] mb-[3rem]'>
        <img src={blog?.image_url} alt="Blog Visual" className='w-[350px] h-[350px] object-cover rounded-[10px]' />
        <div>
          <div className='flex gap-[15px] mb-[16px]'>
            <h1 className='text-[#2B59E3] text-[18px] font-[600]'>Blog Post</h1>
            <h2 className='text-[#55607E] text-[18px] font-[600]'>{formatDate(blog?.created_at)}</h2>
          </div>
          <h1 className='text-[70px] dm-serif font-[400] leading-[0.9] mb-[20px]'>{blog?.heading}</h1>
          <h2 className='text-[18px] text-[#35405F] mb-[20px]'>{blog?.subheading}</h2>
          <hr className='text-gray-300'/>
        </div>
      </div>
      {/* Render rich text HTML safely */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  )
}
