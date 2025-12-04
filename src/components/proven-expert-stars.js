import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const ProvenExpertStars = ({ pageUrl, placeData }) => {
  const { dataJson: dynamicValues } = useStaticQuery(graphql`
    {
      dataJson {
        ratingValue
        reviewCount
      }
    }
  `)

  const rating = Number(dynamicValues?.ratingValue || 0)
  const count = Number(dynamicValues?.reviewCount || 0)

  if (!(rating > 0 && count > 0)) return null
  if (!pageUrl) return null

  /**
   * areaServed mit PostalAddress (Best Practice)
   */
  let areaServed
  if (placeData && placeData.zipcode && placeData.long) {
    areaServed = {
      "@type": "City",
      name: placeData.long, // z. B. "Berlin-Rahnsdorf" oder "Neuenhagen bei Berlin"
      address: {
        "@type": "PostalAddress",
        postalCode: String(placeData.zipcode), // z. B. "12589"
        addressLocality: placeData.long,       // z. B. "Berlin-Rahnsdorf"
        addressCountry: "DE",
      },
    }
}

  /**
   * Hauptschema für Google Rich Results
   */
  const provenExpertData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LPE Versicherungsmakler | Lars-Peter Eckhardt",
    "description":
      "Ihr Makler für: Altersvorsorge | Versicherungen | Finanzierungen | Immobilien",
    "image":
      "https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/lars-peter-eckhardt_full_1524080663.jpg",
    "url": pageUrl,
    "sameAs": ["https://www.provenexpert.com/lars-peter-eckhardt/"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "ratingCount": count,
      "bestRating": 5,
      "worstRating": 1
    },
    ...(areaServed ? { areaServed } : {})
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(provenExpertData) }}
    />
  )
}

ProvenExpertStars.propTypes = {
  pageUrl: PropTypes.string.isRequired,
  placeData: PropTypes.shape({
    title: PropTypes.string,
    short: PropTypes.string,
    zipcode: PropTypes.string,
  }),
}

export default ProvenExpertStars
