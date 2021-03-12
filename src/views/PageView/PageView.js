import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react';

import PropTypes from 'prop-types';
import {
	Content,
	FooterNewsletter,
	Hero,
	SidebarArticles,
	SidebarNewsletter,
	SimilarStories,
} from './components';

import { content, sidebarArticles, similarStories } from './data';


const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
	},
  list: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
    fontSize: '1.5em',
    marginLeft: '40px'
  },
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
	sidebarNewsletter: {
		marginTop: theme.spacing(4),
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(2),
		},
	},
	footerNewsletterSection: {
		background: theme.palette.primary.dark,
	},
}));

const PageView = (data) => {
	const classes = useStyles();
  const props = '';
  const components = {
    p : (props) => <Typography {...props} component="p" variant="h6" color="textPrimary" className={classes.section} />,
    h1 : (props) => <Typography {...props} component="h1" variant="h3" color="textPrimary" className={classes.section} />,
    h2 : (props) => <Typography {...props} component="h2" variant="h4" color="textPrimary" className={classes.section} />,
    ul : (props) => <ul {...props} className={classes.list} />
  };
	return (
		<div className={classes.root}>
			<Hero title={data.data.mdx.frontmatter.title} claim={data.data.mdx.frontmatter.claim} description={data.data.mdx.frontmatter.description} />
			<Section>
				<Grid container spacing={4}>
					<Grid item xs={12} md={8}>
          <MDXProvider components = {components}>
            <MDXRenderer>{data.data.mdx.body}</MDXRenderer>
          </MDXProvider>
					</Grid>
					<Grid item xs={12} md={4}>
						<SidebarArticles data={sidebarArticles} />
						<SidebarNewsletter className={classes.sidebarNewsletter} />
					</Grid>
				</Grid>
			</Section>
			<SectionAlternate>
				<SimilarStories data={similarStories} />
			</SectionAlternate>
			<SectionAlternate className={classes.footerNewsletterSection}>
				<FooterNewsletter />
			</SectionAlternate>
		</div>
	);
};

PageView.propTypes = {
	data: PropTypes.object
};

export default PageView;
