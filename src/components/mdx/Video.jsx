import React, { useState } from "react";

export default function Video({ id, title }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="inline-block w-full md:w-1/2"
      onClick={() => setShowVideo(true)}
      onKeyDown={() => setShowVideo(true)}
      role="button"
      tabIndex={0}
    >
      <div className="m-3 aspect-video border border-divider bg-footer">
        {showVideo ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border border-divider"
          ></iframe>
        ) : (
          <div className="flex h-full flex-col justify-center text-center">
            <i className="far fa-play-circle text-6xl text-white"></i>
            <p className="mt-5 text-lightgrey">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
}
