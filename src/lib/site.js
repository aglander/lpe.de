export const siteMetadata = {
  title: "Lars-Peter Eckhardt | LPE Versicherungsmakler & Finanzmakler",
  description:
    "5★ Top-Empfehlung: Lars-Peter Eckhardt | LPE Versicherungsmakler & Finanzmakler ► Altersvorsorge ✔ | Versicherungen ✔ | Finanzierungen ✔ | Immobilien ✔ | ★★★★★ |",
  siteUrl: "https://www.lpe.de",
  image: "/images/icon.png",
  themeColor: "#68B436",
  trackingId: "UA-114309100-1",
};

export const businessMetadata = {
  name: "LPE Versicherungsmakler | Lars-Peter Eckhardt",
  legalName: "LPE & GREY Versicherungsmakler & Finanzmakler GmbH & Co. KG",
  email: "kontakt@lpe.de",
  logo: "/images/LPE_Logo_full.png",
  image: "/images/LPE_Logo_full.png",
  founder: "Lars-Peter Eckhardt",
  priceRange: "€",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+49-33432-89101",
    email: "kontakt@lpe.de",
    areaServed: "DE",
    availableLanguage: ["de"],
  },
};

export const officeLocations = [
  {
    id: "muencheberg",
    name: "LPE & GREY Müncheberg",
    streetAddress: "Wasserstraße 2",
    addressLocality: "Müncheberg",
    postalCode: "15374",
    addressCountry: "DE",
    telephone: "+49-33432-89101",
    faxNumber: "+49-33432-89104",
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Wasserstra%C3%9Fe%202%2C%2015374%20M%C3%BCncheberg",
  },
  {
    id: "woltersdorf",
    name: "LPE & GREY Woltersdorf",
    streetAddress: "Lerchenstr. 40",
    addressLocality: "Woltersdorf bei Berlin",
    postalCode: "15569",
    addressCountry: "DE",
    telephone: "+49-3362-7000250",
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Lerchenstr.%2040%2C%2015569%20Woltersdorf%20bei%20Berlin",
  },
];

export const footerLinks = {
  primary: [
    { href: "/altersvorsorge/", label: "Altersvorsorge" },
    { href: "/versicherungen/", label: "Versicherungen" },
    { href: "/finanzierungen/", label: "Finanzierungen" },
    { href: "/liebe-familie/", label: "Liebe Familie" },
  ],
  secondary: [
    { href: "/kontakt/", label: "Kontakt" },
    { href: "/impressum/", label: "Impressum" },
    { href: "/datenschutz/", label: "Datenschutz" },
    { href: "/erstinformation/", label: "Erstinformation" },
    { href: "/ortsverzeichnis/", label: "Ortsverzeichnis" },
  ],
};
