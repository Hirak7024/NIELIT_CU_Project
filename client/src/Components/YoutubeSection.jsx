import React from "react";
import { YoutubeVideos } from "../YoutubeVideos";

const YouTubeSection = () => {

  return (
    <div className="flex gap-[1rem]">
      {YoutubeVideos?.map((video) => (
        <div key={video.id} className="overflow-hidden w-[20rem]">
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
    </div>
  );
};

export default YouTubeSection;
