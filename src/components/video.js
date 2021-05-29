import * as React from "react"

const Video = ({ id, title }) => {
  const [showVideo, setShowVideo] = React.useState(false)
  const onClick = () => setShowVideo(true)

  return (
    <div
      class="w-full md:w-1/2 inline-block"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <div class="aspect-w-16 aspect-h-9 m-3 border-divider border bg-footer">
        {showVideo ? (
          <iframe
            src={"https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1"}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="border border-divider"
          ></iframe>
        ) : (
          <div class="text-center flex flex-col justify-center">
            <i class="far fa-play-circle text-6xl text-white"></i>
            <p class="mt-5 text-lightgrey">{title}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Video
