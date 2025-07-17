import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios"; // ✅ Don't forget to import axios

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

const YoutubeVideoSection = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/youtubeVideo/fetch/");
                setVideos(response.data);
            } catch (err) {
                console.error("Failed to fetch videos:", err);
                setError("Failed to load Videos");
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, []);

    const getYouTubeVideoId = (url) => {
        try {
            const parsedUrl = new URL(url);
            if (parsedUrl.hostname === "youtu.be") return parsedUrl.pathname.slice(1);
            return new URLSearchParams(parsedUrl.search).get("v");
        } catch {
            return null;
        }
    };

    return (
        <div className="w-screen flex flex-col items-center gap-[2rem] bg-[#F7F9FF] mb-[4rem]">
            <h1 className="text-[42px] font-[500] dm-serif">Video Recommendation</h1>
            {error && <p className="text-red-500">{error}</p>}
            {!loading && (
                <Carousel
                    className="mt-0 w-[80%]"
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    customTransition="transform 1000ms ease-in-out"
                    transitionDuration={1000}
                >
                    {videos?.map((video) => {
                        const videoId = getYouTubeVideoId(video.video_link);
                        return (
                            <div key={video.id} className="w-[18rem]">
                                <a
                                    href={video.video_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                        alt={video.video_title}
                                        className="w-full h-[12rem] rounded-lg object-cover"
                                    />
                                    <p className="px-4 text-[15px] font-semibold text-justify line-clamp-2 overflow-hidden text-ellipsis">
                                        {video.video_title}
                                    </p>
                                </a>
                            </div>
                        );
                    })}
                </Carousel>
            )}
        </div>
    );
};

export default YoutubeVideoSection;
