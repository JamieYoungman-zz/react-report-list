import React from 'react';
import styled from 'styled-components';
import Icon from './Icons';

const breakPoints = {
	xlarge: '1200px',
	large: '1000px',
	medium: '800px',
	small: '600px',
	xsmall: '400px'
};

const Wrapper = styled.div`
	width: 20%;
	float: left;
	margin-top: 24px;
	@media (max-width: ${breakPoints.large}) {
		width: 30%;
	}
`;

const Title = styled.h3`
	margin-top: 0;
`;
Title.displayName = 'Title';

const Type = styled.p`
	margin-bottom: 4px;
`;
Type.displayName = 'Type';

const Frequency = styled.p`
	margin-bottom: 4px;
	margin-top: 0;
`;
Frequency.displayName = 'Frequency';

const Active = styled.div`
	margin-bottom: 4px;
`;
Active.displayName = 'Active';

const ActiveIcon = styled.span`
	height: 12px;
	width: 12px;
	background: ${props => (props.active ? 'green' : 'red')};
	border-radius: 50%;
	display: inline-block;
`;
ActiveIcon.displayName = 'ActiveIcon';

const Chart = styled.div``;
Chart.displayName = 'Chart';

const Report = props => {
	return (
		<Wrapper>
			<Title>{props.name}</Title>
			<Type>Type: {props.type}</Type>
			<Frequency>Frequency: {props.frequency}</Frequency>
			<Active>
				Active: <ActiveIcon active={props.active} />
			</Active>
			<Chart>
				Chart Type: <Icon chartType={props.chartType} />
			</Chart>
		</Wrapper>
	);
};

export default Report;
