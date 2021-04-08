import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		
	},
}));

const ProvenExpertStars = () => {
	const classes = useStyles();

	const theme = useTheme();

	return (
		<div className={classes.root}>
			<div class="pe-richsnippets"></div>
			<script
				type="text/javascript"
				src="https://www.provenexpert.com/widget/richsnippet.js?u=14Jp3xmphSUZ5RKZjWGBmVwZ48TA1LmA&v=2"
				async
			></script>
		</div>
	);
};

export default ProvenExpertStars;
