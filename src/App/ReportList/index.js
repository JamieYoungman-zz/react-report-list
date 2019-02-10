import React from 'react';
import styled from 'styled-components';

import Report from './Report';

const Title = styled.h1`
	text-align: center;
`;
Title.displayName = 'Title';

const TableHeader = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
`;
TableHeader.displayName = 'TableHeader';

const TableHeading = styled.div`
	font-weight: bold;
	font-size: 18px;
	text-align: center;
	${props => {
		switch (props.index) {
			case 0:
				return 'width: 45%; border-left: 1px solid #ccc; text-align: left;';
			case 4:
				return 'width: 10%';
			default:
				return 'width: 15%';
		}
	}}
	padding: 8px;
	border-top: 1px solid #ccc;
	border-right: 1px solid #ccc;
`;
TableHeading.displayName = 'TableHeading';

const Grid = styled.div`
	border-left: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
`;
Grid.displayName = 'Grid';
class ReportList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reports: props.data
		};
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
				<TableHeader>
					{tableHeadings.map((heading, index) => {
						return (
							<TableHeading index={index} key={heading}>
								{heading}
							</TableHeading>
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
							/>
						);
					})}
				</Grid>
			</React.Fragment>
		);
	}
}

export default ReportList;
