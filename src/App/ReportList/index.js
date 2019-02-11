import React from 'react';
import styled from 'styled-components';

import Report from './Report';

const Title = styled.h1`
	text-align: center;
`;
Title.displayName = 'Title';

const TableHeader = styled.div`
	margin-top: 24px;
	width: 100%;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	border-left: 1px solid #ccc;
`;
TableHeader.displayName = 'TableHeader';

const TableHeading = styled.div`
	font-weight: bold;
	font-size: 18px;
	text-align: center;
	padding: 8px;
	border-top: 1px solid #ccc;
	border-right: 1px solid #ccc;
	width: 15%;
	&:first-child {
		width: 45%;
		text-align: left;
	}
	&:last-child {
		width: 10%;
	}
`;
TableHeading.displayName = 'TableHeading';

const Grid = styled.div`
	border-left: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
`;
Grid.displayName = 'Grid';

const Sort = styled.div`
	width: auto;
	float: left;
	margin-bottom: 24px;
`;
Sort.displayName = 'Sort';

const SortLabel = styled.label`
	float: left;
	margin-right: 12px;
`;
SortLabel.displayName = 'SortLabel';

const Filter = styled.div`
	width: auto;
	float: left;
	margin-left: 12px;
`;
Filter.displayName = 'Filter';

const FilterLabel = styled.label`
	float: left;
	margin-right: 12px;
`;
FilterLabel.displayName = 'FilterLabel';

class ReportList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reports: props.data,
			filter: undefined
		};
		this.handleSortBy = this.handleSortBy.bind(this);
		this.handleFilterType = this.handleFilterType.bind(this);
	}

	handleSortBy(event) {
		if (event.target.value === 'A-Z') {
			const copy = [...this.state.reports].sort((a, b) =>
				a.name.localeCompare(b.name)
			);

			return this.setState({
				reports: copy
			});
		}
		if (event.target.value === 'Z-A') {
			const copy = [...this.state.reports]
				.sort((a, b) => a.name.localeCompare(b.name))
				.reverse();

			return this.setState({
				reports: copy
			});
		}
	}

	handleFilterType(event) {
		if (event.target.value !== 'Select') {
			this.setState({
				filter: event.target.value
			});
		}
	}
	render() {
		const { reports } = this.state;

		const tableHeadings = [
			'Name',
			'Type',
			'Frequency',
			'Chart Type',
			'Active'
		];

		return (
			<React.Fragment>
				<Title>Report List</Title>
				<Sort>
					<SortLabel>Sort by Report Name:</SortLabel>
					<select onChange={this.handleSortBy}>
						<option value="Select">Select</option>
						<option value="A-Z">A-Z</option>
						<option value="Z-A">Z-A</option>
					</select>
				</Sort>

				<Filter>
					<FilterLabel>Filter by type</FilterLabel>
					<select onChange={this.handleFilterType}>
						<option value="Select">Select</option>
						<option value="Visitors">Visitors</option>
						<option value="Gender">Gender</option>
						<option value="Age range">Age Range</option>
					</select>
				</Filter>

				<TableHeader>
					{tableHeadings.map(heading => {
						return (
							<TableHeading key={heading}>{heading}</TableHeading>
						);
					})}
				</TableHeader>
				<Grid>
					{reports
						.filter(
							item =>
								this.state.filter === undefined ||
								item.type === this.state.filter
						)
						.map(report => {
							return (
								<Report
									key={report.name}
									name={report.name}
									type={report.type}
									frequency={report.frequency}
									active={report.active}
									chartType={report.chartType}
									sortBy={() => this.sortBy}
								/>
							);
						})}
				</Grid>
			</React.Fragment>
		);
	}
}

export default ReportList;
