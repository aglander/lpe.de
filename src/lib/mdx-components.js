import React from "react";
import AwardBox from "../components/mdx/AwardBox.jsx";
import Box from "../components/mdx/Box.jsx";
import CompareBox from "../components/mdx/CompareBox.jsx";
import ContactAndCompareBox from "../components/mdx/ContactAndCompareBox.jsx";
import Example from "../components/mdx/Example.jsx";
import ExpandBox from "../components/mdx/ExpandBox.jsx";
import InsurancesBox from "../components/mdx/InsurancesBox.jsx";
import Link from "../components/mdx/Link.jsx";
import Navigation from "../components/mdx/Navigation.jsx";
import Place from "../components/mdx/Place.jsx";
import ProvenExpert from "../components/mdx/ProvenExpert.jsx";
import Reviews from "../components/mdx/Reviews.jsx";
import Video from "../components/mdx/Video.jsx";

export const createMdxComponents = ({ ctas, placeData } = {}) => ({
  AwardBox,
  Box: (props) => React.createElement(Box, { alternate: true, ...props }),
  CompareBox,
  ContactAndCompareBox: () =>
    React.createElement(ContactAndCompareBox, { ctas }),
  Example,
  ExpandBox,
  InsurancesBox,
  Link,
  Navigation,
  Place: (props) => React.createElement(Place, { ...props, placeData }),
  ProvenExpert,
  Reviews,
  Video,
});
