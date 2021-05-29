import React, { useState } from "react"

const ExpandBox = ({ title, children }) => {
  const [open, setOpen] = useState(false)

  const handleExpand = () => {
    setOpen(!open)
  }

  return (
    <div class="shadow p-4 rounded-md">
      <div role="button" onClick={handleExpand} aria-hidden="true">
        <h1 class="text-xl uppercase text-green">
          <i
            class={
              open
                ? "fas fa-angle-down mr-2 text-text"
                : "fas fa-angle-right mr-2 text-text"
            }
          ></i>{" "}
          {title}
        </h1>
      </div>
      <div class={!open && "hidden"}>{children}</div>
    </div>
  )
}

export default ExpandBox
