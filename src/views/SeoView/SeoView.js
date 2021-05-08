import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import {
  Section,
  ContactAndCompareBox,
  PageHero,
  ProvenExpert,
  ProvenExpertStars,
  AwardBox,
  ExamplesBox,
  Example,
  CompareBox,
  InsurancesBox,
  Place,
  Reviews,
  Video,
  Seo,
  ContactForm,
} from "components/organisms";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const { places } = require("../../data/places");

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  divider: {
    marginBottom: "30px",
  },
  list: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
    fontSize: "1.4em",
    marginLeft: "40px",
  },
  headline2: {
    borderColor: theme.palette.alternate.dark,
    borderWidth: "0 0 1px 0",
    borderStyle: "solid",
    paddingBottom: "10px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  contactPanel: {
    fick: "dich",
  },
}));

const SeoView = (data) => {
  const classes = useStyles();

  let {
    data: {
      mdx: {
        frontmatter: {
          heroTitle,
          heroClaim,
          heroDescription,
          slug,
          compare,
          heroImage,
          seoTitle,
          seoDescription,
        },
        body,
      },
      file,
      place,
    },
  } = data;

  const placeData = places.filter((placeItem) => placeItem.slug === place)[0];
  if (placeData.title) heroClaim = placeData.title;

  if (placeData.image && file) {
    heroImage = file.childImageSharp;
  }

  if (seoDescription || seoTitle) {
    let placeName = '';
    if (placeData.zipcode) {
      placeName += placeData.zipcode + ' ';
    }
    placeName += placeData.short;
    seoTitle = seoTitle && seoTitle.replace(/<Place \/>/, placeName);
    seoDescription = seoDescription && seoDescription.replace(/<Place \/>/, placeName);
  }

  const components = {
    p: (props) => (
      <Typography
        {...props}
        component="p"
        variant="h6"
        color="textPrimary"
        className={classes.section}
      />
    ),
    h1: (props) => (
      <Typography
        {...props}
        component="h1"
        variant="h3"
        color="textPrimary"
        className={classes.section}
      />
    ),
    h2: (props) => (
      <Typography
        {...props}
        component="h2"
        variant="h4"
        color="textPrimary"
        className={classes.headline2}
      />
    ),
    ul: (props) => <ul {...props} className={classes.list} />,
    ContactAndCompareBox: (props) => (
      <ContactAndCompareBox {...props} slug={slug} compare={compare} />
    ),
    ProvenExpert: (props) => (
      <ProvenExpert {...props} wide={true} />
    ),
    AwardBox,
    ExamplesBox,
    Example,
    Link: (props) => (
      <Typography {...props} component={Link} variant="h6" color="primary" />
    ),
    CompareBox,
    InsurancesBox,
    Place: (props) => <Place {...props} placeData={placeData} />,
    Reviews,
    hr: (props) => <Divider {...props} className={classes.divider} />,
    Video,
    ContactForm,
  };

  return (
    <div className={classes.root}>
      <Seo title={seoTitle} description={seoDescription} />
      <PageHero
        title={heroTitle}
        claim={heroClaim}
        description={heroDescription}
        slug={slug}
        compare={compare}
        image={heroImage}
      />
      <Section>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <ProvenExpertStars />
      </Section>
    </div>
  );
};

SeoView.propTypes = {
  data: PropTypes.object,
};

export default SeoView;
