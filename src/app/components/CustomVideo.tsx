"use-client";
import React from "react";
const video_url =  '/oasis.mp4';


interface CustomVideoProps {}

const CustomVideo: React.FC<CustomVideoProps> = () => {
  return (
    <div className="md:w-[80%] w-[100%] m-auto px-6 md:px-0">
      <video width={1000} controls autoPlay>
        <source src={video_url}  type="video/mp4" />
        your browser does not support the video tag
      </video>
      </div>
  );
};

export default CustomVideo;
