import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Box from "./box"
import Button from "./button"
import Cookies from "js-cookie"

const CookieConsent = () => {
  const [open, setOpen] = useState(false)

  setOpen(!Cookies.get("gatsby-gdpr-google-analytics"))

  const enableTracking = doIt => {
    if (doIt) {
      Cookies.set("gatsby-gdpr-google-analytics", "true", { expires: 365 })
    } else {
      Cookies.set("gatsby-gdpr-google-analytics", "false", { expires: 365 })
    }
  }

  const accept = () => {
    enableTracking(true)
    window.location.reload()
  }

  const deny = () => {
    enableTracking(false)
    handleClose()
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <></>
  )
}

export default CookieConsent
