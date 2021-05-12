import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
//import 'react-lazy-load-image-component/src/effects/opacity.css';
//import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';

//import 'swiper/css/swiper.min.css';
//import 'aos/dist/aos.css';

export default function TopLayout(props) {
	return (
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<meta name="theme-color" content="#ffffff" />
				<meta
					name="robots"
					content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<meta property="og:locale" content="de_DE" />
				<meta property="og:type" content="website" />
				<script
					defer
					src="https://kit.fontawesome.com/4c273e6d43.js"
					crossOrigin="anonymous"
				></script>
			</Helmet>
			{props.children}
		</React.Fragment>
	);
}

TopLayout.propTypes = {
	children: PropTypes.node,
};
