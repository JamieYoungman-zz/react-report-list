import React from 'react';
import { shallow } from 'enzyme';
import App from './';

describe('App', () => {
	let element;
	beforeEach(() => {
		element = shallow(<App />);
	});

	it('should render something', () => {
		expect(element.find('Container')).toHaveLength(1);
	});

	it('should render a report list component and pass in some data', () => {
		expect(element.find('ReportList')).toHaveLength(1);
	});
});
