import * as React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Divider from "../components/divider"
import { Link } from "gatsby"

const Mdx = ({ components, children }) => {
  const mdxComponents = {
    hr: () => <Divider class="mb-7" />,
    p: props => <p class="text-base lg:text-xl mb-6 lg:leading-9" {...props} />,
    h1: props => (
      <h2 class="text-4xl lg:text-5xl mb-10 hyphens" {...props}>
        {props.children}
      </h2>
    ),
    h2: props => (
      <h3
        class="text-2xl lg:text-4xl mt-12 mb-8 border-b border-divider pb-4 hyphens"
        {...props}
      >
        {props.children}
      </h3>
    ),
    ul: props => (
      <ul
        class="text-base lg:text-xl list-disc list-outside ml-6 mb-8"
        {...props}
      />
    ),
    a: props => (
      <a class="text-green hover:text-darkgreen" {...props}>
        {props.children}
      </a>
    ),
    Link: props => (
      <Link class="text-green hover:text-darkgreen text-base lg:text-xl" {...props} />
    ),
    ...components,
  }

  return (
    <div class="text-base lg:text-xl lg:leading-9">
      <MDXProvider components={mdxComponents}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Mdx
