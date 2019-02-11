import React from 'react';
import { shallow } from 'enzyme';
import ReportList from './';

const MockData = [
	{
		name: 'Thirty day visitor report',
		type: 'Visitors',
		chartType: 'bar',
		filterTypes: ['Gender', 'Age range'],
		frequency: 'monthly',
		active: true
	},
	{
		name: 'Daily visitors report',
		type: 'Visitors',
		chartType: 'column',
		filterTypes: [],
		frequency: 'daily',
		active: true
	},
	{
		name: 'Thirty day gender report',
		type: 'Gender',
		chartType: 'pie',
		filterTypes: ['Location', 'Age range'],
		frequency: 'monthly',
		active: true
	},
	{
		name: 'Weekly age range report',
		type: 'Age range',
		chartType: 'bar',
		filterTypes: ['Device type', 'Operating system'],
		frequency: 'weekly',
		active: false
	}
];

const tableHeadings = ['Name', 'Type', 'Frequency', 'Chart Type', 'Active'];

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

	it('should have a table header', () => {
		expect(element.find('TableHeader')).toHaveLength(1);

		tableHeadings.forEach((heading, index) => {
			expect(
				element
					.find('TableHeading')
					.at(index)
					.dive()
					.text()
			).toEqual(heading);
		});
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

	it('should sort the list by default order', () => {
		expect(
			element
				.find('Report')
				.at(0)
				.prop('name')
		).toEqual('Thirty day visitor report');
	});

	it('should sort the list by A-Z or Z-A when an option is selected', () => {
		expect(
			element
				.find('Report')
				.at(0)
				.prop('name')
		).toEqual('Thirty day visitor report');

		element
			.find('Sort')
			.find('select')
			.prop('onChange')({
			target: { value: 'A-Z' }
		});

		expect(
			element
				.find('Report')
				.at(0)
				.prop('name')
		).toEqual('Daily visitors report');

		element
			.find('Sort')
			.find('select')
			.prop('onChange')({
			target: { value: 'Z-A' }
		});

		expect(
			element
				.find('Report')
				.at(0)
				.prop('name')
		).toEqual('Weekly age range report');
	});

	it('should filter the results by the report type', () => {
		expect(element.find('Filter')).toHaveLength(1);

		element
			.find('Filter')
			.find('select')
			.prop('onChange')({
			target: { value: 'Gender' }
		});

		expect(element.find('Report')).toHaveLength(1);
		expect(
			element
				.find('Report')
				.at(0)
				.prop('name')
		).toEqual('Thirty day gender report');

		element
			.find('Filter')
			.find('select')
			.prop('onChange')({
			target: { value: 'Visitors' }
		});

		expect(element.find('Report')).toHaveLength(2);
		expect(
			element
				.find('Report')
				.at(1)
				.prop('name')
		).toEqual('Daily visitors report');
	});
});
