import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 0 auto;
	width: 96%;
	max-width: 1200px;
`;

class App extends React.Component {
	render() {
		return (
			<Container>
				<p>Hi</p>
			</Container>
		);
	}
}

export default App;
