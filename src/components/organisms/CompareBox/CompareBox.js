import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  iframe: {
    width: "100%",
    minHeight: "1100px",
    border: 0,
  },
  notice: {
	marginBottom: '20px',
	border: '1px solid #5B5B5B',
	padding: '5px',
  }
}));

const CompareBox = (props) => {
  const { url, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <Typography variant="h6" component="p" className={classes.notice}>
        Mit Benutzung des Vergleichrechners bestätige ich, dass ich die{" "}
        <Typography variant="a" component={Link} to="/erstinformation" color="primary">
          Erstinformation
        </Typography>
        <Link to="/erstinformation"></Link> gelesen und gespeichert habe.
      </Typography>
      <iframe src={url} className={classes.iframe} title="Vergleichsrechner" />
    </div>
  );
};

CompareBox.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * url to be opened
   */
  url: PropTypes.string,
};

export default CompareBox;
