import React from 'react';
import { shallow } from 'enzyme';

import Report from './';

describe('App', () => {
	let element;

	beforeEach(() => {
		element = shallow(
			<Report
				name="Report Name"
				type="Report Type"
				frequency="Report Frequency"
				active={true}
			/>
		);
	});

	it('should render a report name', () => {
		expect(element.find('Title').text()).toEqual('Report Name');
	});

	it('should render a report type', () => {
		expect(element.find('Type').text()).toEqual('Type: Report Type');
	});

	it('should render a report Frequency', () => {
		expect(element.find('Frequency').text()).toEqual(
			'Frequency: Report Frequency'
		);
	});
});
