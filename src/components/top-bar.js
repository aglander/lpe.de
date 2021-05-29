import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const TopBar = ({ children, onSidebarOpen }) => (
  <>
    <header class="border-b border-divider fixed w-full bg-white z-40">
      <div class="max-w-screen-xl mx-auto p-2 flex">
        <Link to="/">
          <StaticImage
            src="../images/LPE_Logo_full.png"
            alt="LPE Logo"
            placeholder="tracedSVG"
            layout="fixed"
            width={225}
            height={50}
            class="lg:hidden xl:block"
          />
          <StaticImage
            src="../images/LPE_Logo_small.png"
            alt="LPE Logo"
            placeholder="tracedSVG"
            layout="fixed"
            width={63}
            height={50}
            class="hidden lg:block xl:hidden"
          />
        </Link>
        <div class="flex-grow flex justify-end items-center">
          <div class="hidden lg:block">{children}</div>
          <div class="lg:hidden">
            <i
              class="fas fa-bars text-text text-2xl"
              onClick={onSidebarOpen}
              role="button"
              aria-label="Menü"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </header>
  </>
)

export default TopBar
