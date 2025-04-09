import React from "react";
import { YoutubeVideos } from "../../YoutubeVideos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./YoutubeSection.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const YouTubeSection = () => {

  return (
    // <div className="flex gap-[1rem]">
    <Carousel
      className="mt-[2rem]"
      responsive={responsive}
      // showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000} // slower autoplay (3 seconds)
      customTransition="transform 1000ms ease-in-out" // smoother transition
      transitionDuration={1500} // 1 second slide transition
    >
      {YoutubeVideos?.map((video) => (
        <div key={video.id} className="w-[20rem]">
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-[12rem] rounded-xl object-cover"
            />
            <p className="pl-2 pr-2 text-[15px] font-semibold text-justify line-clamp-2 overflow-hidden text-ellipsis">
              {video.title}
            </p>
          </a>
        </div>
      ))}
    </Carousel>
    // </div>
  );
};

export default YouTubeSection;
