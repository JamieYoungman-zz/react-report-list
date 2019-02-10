import React from 'react';
import styled from 'styled-components';
import ReportList from './ReportList';
import ReportData from './mock-data.json';

const Container = styled.div`
	margin: 0 auto;
	width: 92%;
	max-width: 1200px;
`;
Container.displayName = 'Container';

class App extends React.Component {
	render() {
		return (
			<Container>
				<ReportList data={ReportData} />
			</Container>
		);
	}
}

export default App;
