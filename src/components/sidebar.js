import React from "react"
import { Helmet } from "react-helmet"

const Sidebar = ({ children, open, onClose }) => (
  <>
    {open && <Helmet htmlAttributes={{ class: "overflow-hidden" }}></Helmet>}
    <div
      class={
        (open ? "block" : "hidden") +
        " fixed inset-0 bg-footer bg-opacity-75 z-50 overflow-y-auto"
      }
      onClick={onClose}
      onKeyPress={onClose}
      role="button"
      area-hidden="true"
      tabIndex={0}
    >
      <aside class="bg-white w-5/6 p-5">{open && children}</aside>
    </div>
  </>
)

export default Sidebar
