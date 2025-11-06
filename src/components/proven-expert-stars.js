import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProvenExpertStars = () => {
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

  const provenExpertData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "LPE | Lars-Peter Eckhardt",
    "description":
      "Ihr Makler für: Altersvorsorge | Versicherungen | Finanzierungen | Immobilien",
    "brand": { "@type": "Brand", "name": "LPE" },
    "image":
      "https://images.provenexpert.com/75/85/c0fdf5733a2767d5d7634b36fd88/lars-peter-eckhardt_full_1524080663.jpg",
    "url": "https://www.lpe.de/",
    "sameAs": ["https://www.provenexpert.com/lars-peter-eckhardt/"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "ratingCount": count,
      "bestRating": 5,
      "worstRating": 1
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(provenExpertData),
      }}
    />
  )
}

export default ProvenExpertStars