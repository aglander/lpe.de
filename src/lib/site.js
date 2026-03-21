import navigation from "../data/navigation.json";
import places from "../data/places.json";
import insurances from "../data/insurances.json";
import provenExpert from "../data/provenexpert.json";

export const siteMetadata = {
  title: "Lars-Peter Eckhardt | LPE Versicherungsmakler & Finanzmakler",
  description:
    "5★ Top-Empfehlung: Lars-Peter Eckhardt | LPE Versicherungsmakler & Finanzmakler ► Altersvorsorge ✔ | Versicherungen ✔ | Finanzierungen ✔ | Immobilien ✔ | ★★★★★ |",
  siteUrl: "https://www.lpe.de",
  image: "/images/icon.png",
  themeColor: "#68B436",
  trackingId: "UA-114309100-1",
};

export { navigation, places, insurances, provenExpert };

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
