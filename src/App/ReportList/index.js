import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
`;
Title.displayName = 'Title';

const Report = styled.div`
	width: 25%;
	float: left;
`;
Report.displayName = 'Report';

const Type = styled.p``;
Type.displayName = 'Type';

const Updated = styled.p``;
Updated.displayName = 'Updated';

const View = styled.button``;
View.displayName = 'View';

const Active = styled.div``;
Active.displayName = 'Active';
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

				{reports.map(report => {
					return (
						<Report key={report.name}>
							<h3>{report.name}</h3>
							<Type>Type: {report.type}</Type>
							<Updated>Updated: {report.frequency}</Updated>
							<Active>
								{report.active ? (
									<View>View</View>
								) : (
									<p>Sorry this report is no longer active</p>
								)}
							</Active>
						</Report>
					);
				})}
			</React.Fragment>
		);
	}
}

export default ReportList;
