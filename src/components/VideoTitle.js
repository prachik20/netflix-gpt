import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-20">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="pt-4 w-2/4">{overview}</p>
      <div>
        <button className="bg-gray-200 my-4 py-2 px-10 rounded-sm">Play</button>
        <button className="bg-gray-200 my-4 ml-2 py-2 px-8 rounded-sm">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
