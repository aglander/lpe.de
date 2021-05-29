/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  BreakpointProvider,
  Breakpoint,
  setDefaultBreakpoints,
} from "react-socks"

import TopBar from "./top-bar"
import CookieConsent from "./cookie-consent"
import { Helmet } from "react-helmet"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import Navigation from "./navigation"
import Sidebar from "./sidebar"
import Seo from "./seo"

setDefaultBreakpoints([
  { sm: 640 },
  { md: 768 },
  { lg: 1024 },
  { xl: 1280 },
  { "2xl": 1536 },
])

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  return (
    <BreakpointProvider>
      <CookieConsent />
      <Seo />
      <Helmet>
        <script
          defer
          src="https://kit.fontawesome.com/85d252b77e.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Breakpoint md down>
        <Sidebar onClose={handleSidebarClose} open={openSidebar}>
          <Navigation />
        </Sidebar>
      </Breakpoint>
      <TopBar onSidebarOpen={handleSidebarOpen}>
        <Breakpoint lg up>
          <Navigation horizontal />
        </Breakpoint>
      </TopBar>

      <main class="pt-16">{children}</main>
      <Breakpoint lg up>
        <iframe
          src="/whofinance-footer.html"
          class="whofinance"
          title="WhoFinance Footer"
        />
      </Breakpoint>
      <footer class="bg-footer py-20 text-lightgrey">
        <div class="max-w-screen-xl md:flex mx-auto">
          <div class="mt-2 px-10">
            <a href="/" title="LPE">
              <StaticImage
                src="../images/LPE_Logo_single_weiss.png"
                alt="LPE Logo"
                placeholder="tracedSVG"
                layout="fixed"
                width={88}
                height={70}
              />
            </a>
            <div class="mt-5">
              <a
                href="https://www.facebook.com/LPE99"
                target="_blank"
                rel="noreferrer"
              >
                <span class="fab fa-facebook text-2xl mr-2"></span>
              </a>

              <a
                href="https://www.youtube.com/channel/UCF95OM65f3Z4U2PLyTBsDrw"
                target="_blank"
                rel="noreferrer"
              >
                <span class="fab fa-youtube text-2xl mr-2"></span>
              </a>
              <a
                href="https://www.linkedin.com/in/lars-peter-eckhardt-75a6a9132"
                target="_blank"
                rel="noreferrer"
              >
                <span class="fab fa-linkedin-in text-2xl mr-2"></span>
              </a>
              <a
                href="https://www.xing.com/profile/LarsPeter_Eckhardt"
                target="_blank"
                rel="noreferrer"
              >
                <span class="fab fa-xing text-2xl mr-2"></span>
              </a>
            </div>
          </div>
          <div class="mt-2 px-10">
            <ul>
              <li>
                <Link to="/altersvorsorge">Altersvorsorge</Link>
              </li>
              <li>
                <Link to="/versicherungen">Versicherungen</Link>
              </li>
              <li>
                <Link to="/finanzierungen">Finanzierungen</Link>
              </li>
              <li>
                <Link to="/immobilien">Immobilien</Link>
              </li>
              <li>
                <Link to="/liebe-familie">Liebe Familie</Link>
              </li>
            </ul>
          </div>
          <div class="mt-2 px-10">
            <ul>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
              <li>
                <Link to="/impressum">Impressum</Link>
              </li>
              <li>
                <Link to="/datenschutz">Datenschutz</Link>
              </li>
              <li>
                <Link to="/erstinformation">Erstinformation</Link>
              </li>
              <li>
                <Link to="/ortsverzeichnis">Ortsverzeichnis</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </BreakpointProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
