import * as React from "react"
import { Link } from "gatsby"

const Button = ({ url, children, outline, onClick }) => (
  <button
    onClick={onClick}
    class={
      (outline
        ? "bg-white text-green hover:bg-lightgrey"
        : "bg-green text-white hover:bg-darkgreen") +
      " border-green border uppercase shadow rounded px-4 py-2 mb-3"
    }
  >
    {url ? (
      url.startsWith("http") ? (
        <a href={url} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <Link to={url}>{children}</Link>
      )
    ) : (
      children
    )}
  </button>
)

export default Button
