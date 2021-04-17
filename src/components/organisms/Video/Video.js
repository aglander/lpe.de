import { Hidden } from '@material-ui/core';
import React from 'react';

const Video = (props) => {
	const { id, ...rest } = props;
	const [showVideo, setShowVideo] = React.useState(false);
	const onClick = () => setShowVideo(true);

	return (
		<div>
			<button onClick={onClick}>Show Video</button>
			{showVideo ? (
				<iframe
					width="370"
					height="208"
					src={"https://www.youtube-nocookie.com/embed/" + id}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			) : null}
		</div>
	);
};

export default Video;
