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

const SortSelect = styled.select`
	padding: 8px;
`;
SortSelect.displayName = 'SortSelect';

const SortLabel = styled.label`
	float: left;
	margin-right: 12px;
`;
SortLabel.displayName = 'SortLabel';

class ReportList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reports: props.data
		};
		this.handleSortBy = this.handleSortBy.bind(this);
	}

	handleSortBy(event) {
		if (event.target.value === 'A-Z') {
			return this.setState({
				reports: this.state.reports.sort((a, b) =>
					a.name.localeCompare(b.name)
				)
			});
		}
		this.setState({
			reports: this.state.reports
				.sort((a, b) => a.name.localeCompare(b.name))
				.reverse()
		});
	}
	render() {
		const { reports } = this.state;

		console.log(reports);

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
					<SortLabel>Sort Report Name by:</SortLabel>
					<SortSelect onChange={this.handleSortBy}>
						<option value="Select">Select</option>
						<option value="A-Z">A-Z</option>
						<option value="Z-A">Z-A</option>
					</SortSelect>
				</Sort>

				<TableHeader>
					{tableHeadings.map(heading => {
						return (
							<TableHeading key={heading}>{heading}</TableHeading>
						);
					})}
				</TableHeader>
				<Grid>
					{reports.map(report => {
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
