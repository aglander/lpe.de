import * as React from "react"

const SectionHeader = ({ preTitle, title, description }) => (
  <div class="text-center mb-2 hyphens">
    {preTitle}
    {title && <h2 class="py-2 text-2xl lg:text-4xl text-grey font-bold">{title}</h2>}
    {description && <p class="text-lg text-textlight">{description}</p>}
  </div>
)

export default SectionHeader
