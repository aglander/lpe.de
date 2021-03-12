import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {MDXRenderer} from 'gatsby-plugin-mdx'

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
  console.log(data.data.mdx.frontmatter.title);
	return (
		<div className={classes.root}>
			<Hero title={data.data.mdx.frontmatter.title} claim={data.data.mdx.frontmatter.claim} description={data.data.mdx.frontmatter.description} />
			<Section>
				<Grid container spacing={4}>
					<Grid item xs={12} md={8}>
            <MDXRenderer>{data.data.mdx.body}</MDXRenderer>
            
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
