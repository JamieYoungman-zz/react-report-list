import React from 'react';
import { shallow } from 'enzyme';
import ReportData from './mock-data.json';
import ReportList from './';

const MockData = ReportData;

describe('App', () => {
	let element;

	beforeEach(() => {
		element = shallow(<ReportList data={MockData} />);
	});

	it('should render something', () => {
		expect(element.find('Title').text()).toEqual('Report List');
	});

	it('should render a report for every item in the data', () => {
		expect(element.find('Report')).toHaveLength(MockData.length);
	});

	it('shhould render a report name, type and frequency updated', () => {
		MockData.forEach((item, index) => {
			expect(
				element
					.find('Report')
					.at(index)
					.find('h3')
					.text()
			).toEqual(item.name);
			expect(
				element
					.find('Report')
					.at(index)
					.find('Type')
					.text()
			).toEqual(`Type: ${item.type}`);
			expect(
				element
					.find('Report')
					.at(index)
					.find('Updated')
					.text()
			).toEqual(`Updated: ${item.frequency}`);
		});
	});

	it('should render a view button if its Active', () => {
		expect(
			element
				.find('Report')
				.at(0)
				.find('Active')
				.find('View')
		).toHaveLength(1);
		expect(
			element
				.find('Report')
				.at(0)
				.find('Active')
				.find('p')
		).toHaveLength(0);
		expect(
			element
				.find('Report')
				.at(3)
				.find('Active')
				.find('View')
		).toHaveLength(0);
		expect(
			element
				.find('Report')
				.at(3)
				.find('Active')
				.find('p')
		).toHaveLength(1);
	});
});
