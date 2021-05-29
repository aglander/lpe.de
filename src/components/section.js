import * as React from "react"

const Section = ({ children, alternate }) => (
  <section class={"py-10 md:py-20 px-2" + (alternate ? " bg-lightgrey" : "")}>
    <div class="max-w-screen-lg mx-auto text-text">{children}</div>
  </section>
)

export default Section
