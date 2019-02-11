import React from 'react';
import { shallow } from 'enzyme';

import Report from './';

const mockDeleteReport = jest.fn();

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
				deleteReport={mockDeleteReport}
			/>
		);
	});

	it('should render a report name', () => {
		expect(
			element
				.find('Title')
				.dive()
				.dive()
				.text()
		).toEqual('Report Name');
	});

	it('should render a report type', () => {
		expect(
			element
				.find('Type')
				.dive()
				.dive()
				.text()
		).toEqual('Report Type');
	});

	it('should render a report Frequency', () => {
		expect(
			element
				.find('Frequency')
				.dive()
				.dive()
				.text()
		).toEqual('Report Frequency');
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
				.prop('icon')
		).toEqual('pie');
	});

	it('should have a delete icon', () => {
		expect(element.find('Delete')).toHaveLength(1);
	});

	it('should call a delete method when delete is clicked', () => {
		element.find('Delete').prop('onClick')();

		expect(mockDeleteReport).toHaveBeenCalled();
	});
});
