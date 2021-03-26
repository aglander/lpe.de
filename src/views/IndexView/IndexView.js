import React from 'react';
import { Hero } from './components';

const IndexView = ({ themeMode }) => {
	return (
		<div>
			<Hero themeMode={themeMode} />
		</div>
	);
};

export default IndexView;
