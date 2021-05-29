import * as React from "react"
import SectionHeader from "./section-header"

const Box = ({ children, title, alternate }) => {
  return (
    <div
      class={
        (alternate ? "bg-white" : "bg-lightgrey") +
        " border-divider border-t border-b md:border py-10 md:p-10 my-5 md:rounded-2xl text-center"
      }
    >
      {title && <SectionHeader title={title} />}
      {children}
    </div>
  )
}

export default Box
