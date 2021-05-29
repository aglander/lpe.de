import * as React from "react"
import Section from "../components/section"

const Hero = ({ children, title, description, ctas, image }) => (
  <div class="max-w-screen-huge mx-auto lg:w-full lg:relative lg:flex">
    <div class="lg:w-1/2 lg:flex lg:flex-1 lg:justify-end">
      <div class="lg:max-w-screen-sm">
        {children ? (
          children
        ) : (
          <Section>
            <h1 class="py-2 mb-2 text-4xl md:text-5xl text-grey font-bold md:leading-tight">{title}</h1>
            <p class="md:text-xl md:leading-normal mb-5 text-textlight">{description}</p>
            <div class="mb-2">{ctas}</div>
          </Section>
        )}
      </div>
    </div>
    <div class="w-2/3 mx-auto mb-5 lg:relative lg:w-1/2 lg:mb-0">
      <div class="hero-image">{image}</div>
    </div>
  </div>
)
export default Hero
