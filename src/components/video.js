const Video = ({ id, title }) => {
  const href = "https://www.youtube.com/watch?v=" + id

  return (
    <a
      class="w-full md:w-1/2 inline-block"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={title + " auf YouTube ansehen"}
    >
      <div class="aspect-w-16 aspect-h-9 m-3 border-divider border bg-footer">
        <div class="text-center flex h-full flex-col justify-center transition-opacity hover:opacity-90">
          <i class="far fa-play-circle text-6xl text-white"></i>
          <p class="mt-5 text-lightgrey">{title}</p>
        </div>
      </div>
    </a>
  )
}

export default Video
