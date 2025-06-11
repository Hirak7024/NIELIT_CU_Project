import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

    useEffect(() => {
        fetch("http://127.0.0.1:8000/youTube/videos/")
            .then((response) => response.json())
            .then((data) => {
                setVideos(data);
            })
            .catch((error) => {
                console.error("Error fetching videos:", error);
            });
    }, []);

    return (
        <div className="w-[screen] flex flex-col items-center gap-[2rem] bg-[#F7F9FF]">
            <h1 className="text-[42px] font-[500] dm-serif">Video Recommendation</h1>
            <Carousel
                className="mt-[0rem] w-[80%]"
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                customTransition="transform 1000ms ease-in-out"
                transitionDuration={1000}
            >
                {videos?.map((video) => (
                    <div key={video.id} className="w-[20rem]">
                        <a
                            href={`https://www.youtube.com/watch?v=${video.video_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`https://img.youtube.com/vi/${video.video_id}/hqdefault.jpg`}
                                alt={video.title}
                                className="w-full h-[12rem] rounded-lg object-cover"
                            />
                            <p className="px-4 text-[15px] font-semibold text-justify line-clamp-2 overflow-hidden text-ellipsis">
                                {video.title}
                            </p>
                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default YoutubeVideoSection;