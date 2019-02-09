import React from 'react';
import styled from 'styled-components';

import Report from './Report';

const Title = styled.h1`
	text-align: center;
`;
Title.displayName = 'Title';

const Grid = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`;

class ReportList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reports: props.data
		};
	}
	render() {
		const { reports } = this.state;

		return (
			<React.Fragment>
				<Title>Report List</Title>
				<Grid>
					{reports.map(report => {
						return (
							<Report
								key={report.name}
								name={report.name}
								type={report.type}
								frequency={report.frequency}
								active={report.active}
							/>
						);
					})}
				</Grid>
			</React.Fragment>
		);
	}
}

export default ReportList;
