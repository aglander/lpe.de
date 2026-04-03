import * as React from "react"
import { Link } from "gatsby"

const Button = ({ url, children, outline, onClick }) => {
  const className =
    (outline
      ? "bg-white !text-green hover:bg-lightgrey"
      : "bg-green !text-white hover:bg-darkgreen") +
    " border-green border uppercase shadow rounded px-4 py-2 inline-flex items-center justify-center"

  if (url) {
    if (url.startsWith("http")) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          onClick={onClick}
          class={className}
        >
          {children}
        </a>
      )
    }

    return (
      <Link to={url} onClick={onClick} class={className}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} class={className}>
      {children}
    </button>
  )
}

export default Button
