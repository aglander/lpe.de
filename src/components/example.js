import * as React from "react"

const Example = ({ title, children, number }) => (
  <div class="inline-block sm:w-1/2 lg:w-1/3 p-5 align-top text-left">
    <span class="border-green border-2 rounded-2xl bg-white px-4 py-2 text-green text-2xl inline-block mb-2">{number}</span>
    <h4 class="text-xl mb-2 font-bold hyphens">{title}</h4>
    <p class="hyphens">{children}</p>
  </div>
)

export default Example
