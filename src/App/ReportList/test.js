import React from 'react';
import { shallow } from 'enzyme';
import ReportData from '../mock-data.json';
import ReportList from './';

const MockData = ReportData;

describe('App', () => {
	let element;

	beforeEach(() => {
		element = shallow(<ReportList data={MockData} />);
	});

	it('should render something', () => {
		expect(
			element
				.find('Title')
				.dive()
				.text()
		).toEqual('Report List');
	});

	it('should render a report for every item in the data', () => {
		expect(element.find('Report')).toHaveLength(MockData.length);
	});

	it('shhould pass a prop to Report for report name, type, frequency updated and chartType', () => {
		MockData.forEach((item, index) => {
			expect(
				element
					.find('Report')
					.at(index)
					.prop('name')
			).toEqual(item.name);
			expect(
				element
					.find('Report')
					.at(index)
					.prop('type')
			).toEqual(item.type);
			expect(
				element
					.find('Report')
					.at(index)
					.prop('frequency')
			).toEqual(item.frequency);
			expect(
				element
					.find('Report')
					.at(index)
					.prop('chartType')
			).toEqual(item.chartType);
		});
	});

	it('should pass Report an active prop with true or false', () => {
		expect(
			element
				.find('Report')
				.at(0)
				.prop('active')
		).toBe(true);
		expect(
			element
				.find('Report')
				.at(3)
				.prop('active')
		).toBe(false);
	});
});
