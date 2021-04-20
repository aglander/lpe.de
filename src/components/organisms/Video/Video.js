import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		borderColor: theme.palette.alternate.dark,
		borderWidth: '1px',
		borderStyle: 'solid',
		backgroundColor: theme.palette.alternate.main,
		margin: '0 5px 5px 0',
		width: '800px',
		height: '600px',
		float: 'left',
		cursor: 'pointer',
		verticalAlign: 'middle',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	video: {
		borderColor: theme.palette.alternate.dark,
		borderWidth: '1px',
		borderStyle: 'solid',
	},
	play: {
		fontSize: '100px',
		color: theme.palette.primary.main,
	},
	playContainer: {
		textAlign: 'center'
	},
}));

const Video = (props) => {
	const { id, width, height, title } = props;

	const classes = useStyles();

	const [showVideo, setShowVideo] = React.useState(false);
	const onClick = () => setShowVideo(true);

	const styleObj = { width: width + 'px', height: height + 'px' };

	return (
		<div className={classes.root} style={styleObj} onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0}>
			{showVideo ? (
				<iframe
					width={width}
					height={height}
					src={'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1'}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					className={classes.video}
				></iframe>
			) : (
				<div className={classes.playContainer}>
					<PlayCircleFilledIcon className={classes.play} />
					<Typography component="p" variant="p">{title}</Typography>
				</div>
			)}
		</div>
	);
};

export default Video;
