import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Box from "./box"
import Button from "./button"
import Cookies from "js-cookie"

const CookieConsent = () => {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)

  setOpen(!Cookies.get("gatsby-gdpr-google-analytics"))

  const enableTracking = doIt => {
    if (doIt) {
      Cookies.set("gatsby-gdpr-google-analytics", "true", { expires: 365 })
    } else {
      Cookies.set("gatsby-gdpr-google-analytics", "false", { expires: 7 })
    }
  }

  const accept = () => {
    setCount(count + 1)
    enableTracking(true)
    handleClose()
  }

  const deny = () => {
    setCount(count + 1)
    enableTracking(false)
    handleClose()
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div
      class={
        (open ? "block" : "hidden") +
        " fixed inset-0 bg-footer bg-opacity-75 z-50 overflow-hidden"
      }
    >
      {open && <Helmet htmlAttributes={{ class: "overflow-hidden" }}></Helmet>}
      <div class="absolute bottom-0 left-0 right-0 -mb-5 lg:mb-0 lg:inset-80 lg:max-w-3xl lg:mx-auto">
        <Box title="Wir benötigen Ihre Zustimmung">
          Diese Website benutzt Google Analytics, um die Erfahrung von Benutzern
          zu verbessern. Sie können die Erfassung Ihrer Daten durch Google
          Analytics verhindern, indem Sie auf "Ablehnen" klicken. Es wird ein
          Cookie gesetzt, dass die Erfassung Ihrer Daten bei Besuchen dieser
          Website verhindert.
          <div class="mt-5">
            <Button onClick={deny} outline>
              Ablehnen
            </Button>
            {"   "}
            <Button onClick={accept}>Akzeptieren</Button>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default CookieConsent
