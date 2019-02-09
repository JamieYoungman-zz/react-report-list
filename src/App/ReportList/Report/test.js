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
				chartType="pie"
			/>
		);
	});

	it('should render a report name', () => {
		expect(
			element
				.find('Title')
				.dive()
				.text()
		).toEqual('Report Name');
	});

	it('should render a report type', () => {
		expect(
			element
				.find('Type')
				.dive()
				.text()
		).toEqual('Type: Report Type');
	});

	it('should render a report Frequency', () => {
		expect(
			element
				.find('Frequency')
				.dive()
				.text()
		).toEqual('Frequency: Report Frequency');
	});

	it('should render a coloured icon for active state', () => {
		expect(element.find('ActiveIcon')).toHaveLength(1);
	});

	it('should have a green icon if its active, red if false', () => {
		expect(element.find('ActiveIcon')).toHaveStyleRule(
			'background',
			'green'
		);

		element.setProps({
			active: false
		});

		expect(element.find('ActiveIcon')).toHaveStyleRule('background', 'red');
	});

	it('should render a view button with a chart icon', () => {
		expect(element.find('Chart')).toHaveLength(1);
	});

	it('should pass chart type to Icons Component', () => {
		expect(
			element
				.find('Chart')
				.find('Icon')
				.prop('chartType')
		).toEqual('pie');
	});
});
