import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexFlow: 'wrap',
		justifyContent: 'space-around',
	},

	box: {
		display: 'flex',
		maxWidth: '500px',
		padding: '20px',
	},
}));

const Advantages = (props) => {
	const { data, className, ...rest } = props;
	const theme = useTheme();
	const classes = useStyles();

	return (
		<div className={className} {...rest}>
			<SectionHeader
				title={
					<span>
						We are reimagining renting to help you{' '}
						<Typography component="span" variant="inherit" color="primary">
							achieve your dreams
						</Typography>
					</span>
				}
				subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
				fadeUp
			/>
			<div class={classes.container}>
				{data.map((item, index) => (
					<div class={classes.box} data-aos="fade-up">
						<Link to={item.link}>
							<DescriptionListIcon
								title={item.title}
								subtitle={item.subtitle}
								icon={
									<Icon
										fontIconClass={item.icon}
										size="medium"
										fontIconColor={theme.palette.primary.main}
									/>
								}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

Advantages.propTypes = {
	/**
	 * External classes
	 */
	className: PropTypes.string,
	/**
	 * data to be rendered
	 */
	data: PropTypes.array.isRequired,
};

export default Advantages;
