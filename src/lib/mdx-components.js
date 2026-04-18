import React from "react";
import AwardBox from "../components/mdx/AwardBox.astro";
import Box from "../components/mdx/Box.astro";
import CompareBox from "../components/mdx/CompareBox.astro";
import ContactAndCompareBoxBridge from "../components/mdx/ContactAndCompareBox.jsx";
import Example from "../components/mdx/Example.astro";
import ExpandBox from "../components/mdx/ExpandBox.astro";
import InsurancesBox from "../components/mdx/InsurancesBox.astro";
import Link from "../components/mdx/Link.astro";
import Navigation from "../components/mdx/Navigation.astro";
import PlaceBridge from "../components/mdx/Place.jsx";
import RatingModule from "../components/mdx/RatingModule.astro";
import ProvenExpert from "../components/mdx/ProvenExpert.astro";
import Reviews from "../components/mdx/Reviews.astro";
import Video from "../components/mdx/Video.astro";

// These components can be rendered directly by MDX without a React bridge.
const staticMdxComponents = {
  AwardBox,
  Box,
  CompareBox,
  Example,
  ExpandBox,
  InsurancesBox,
  Link,
  Navigation,
  RatingModule,
  ProvenExpert,
  Reviews,
  Video,
};

// These components still need React wrappers because MDX receives runtime-injected
// values (`ctas`, `placeData`) from the shared route.
const createBridgeComponents = ({ ctas, placeData }) => ({
  ContactAndCompareBox: () =>
    React.createElement(ContactAndCompareBoxBridge, { ctas }),
  Place: (props) => React.createElement(PlaceBridge, { ...props, placeData }),
});

export const createMdxComponents = ({ ctas, placeData } = {}) => ({
  ...staticMdxComponents,
  ...createBridgeComponents({ ctas, placeData }),
});
