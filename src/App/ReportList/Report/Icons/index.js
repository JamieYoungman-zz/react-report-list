import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ chartType }) => {
	const iconSet = {
		bar: faChartBar,
		column: faChartBar,
		pie: faChartPie
	};

	return <FontAwesomeIcon icon={iconSet[chartType]} color="#463b84" />;
};

export default Icon;
