import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ icon }) => {
	const iconSet = {
		bar: faChartBar,
		column: faChartBar,
		pie: faChartPie,
		delete: faTimesCircle
	};

	return <FontAwesomeIcon icon={iconSet[icon]} color="#463b84" />;
};

export default Icon;
