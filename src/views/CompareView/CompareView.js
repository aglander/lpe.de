import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem } from '@material-ui/core';
import { Section, SectionHeader, ContactPanel } from 'components/organisms';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
	},
	sectionHeader: {
		padding: '0 64px',
	},
	compare: {
		width: '100%',
		minHeight: '1100px',
		border: 0,
	},
}));

const CompareView = (data) => {
	const classes = useStyles();
	const props = '';

	return (
		<div className={classes.root}>
			<Section>
				<Grid container spacing={4}>
					<Grid item xs={12} md={8}>
						<Section className={classes.sectionHeader}>
							<Typography component="h2" variant="h4">
								{data.data.mdx.frontmatter.title} vergleichen
							</Typography>
							<Typography component="p" variant="h6">
								Hier ist Platz für eine generische Beschreibung, die auf allen
								Vergleichsseiten zu finden ist. Ok, wenn es sein muss, kann ich
								dir das natürlich auch wieder dynamisch bauen. Melde dich
								einfach, Larsi.
							</Typography>
						</Section>
						<Section>
							<iframe
								src={data.data.mdx.frontmatter.compare}
								className={classes.compare}
							/>
						</Section>
					</Grid>
					<Grid item xs={12} md={4}>
						<ContactPanel />
					</Grid>
				</Grid>
			</Section>
		</div>
	);
};

CompareView.propTypes = {
	data: PropTypes.object,
};

export default CompareView;
