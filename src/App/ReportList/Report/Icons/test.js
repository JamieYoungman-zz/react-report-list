import React from 'react';
import { shallow } from 'enzyme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

import Icon from './';

describe('App', () => {
	it('should render the pie icon if piechart', () => {
		const element = shallow(<Icon chartType="pie" />);
		expect(element.find(FontAwesomeIcon).prop('icon')).toEqual(faChartPie);
	});
	it('should render the bar icon if barchart', () => {
		const element = shallow(<Icon chartType="bar" />);
		expect(element.find(FontAwesomeIcon).prop('icon')).toEqual(faChartBar);
	});
	it('should render the bar icon if column chart', () => {
		const element = shallow(<Icon chartType="column" />);
		expect(element.find(FontAwesomeIcon).prop('icon')).toEqual(faChartBar);
	});
});
