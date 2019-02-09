import React from 'react';
import styled from 'styled-components';
import Icons from './Icons';

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

const Active = styled.div``;
Active.displayName = 'Active';

const ActiveIcon = styled.span`
	height: 12px;
	width: 12px;
	background: ${props => (props.active ? 'green' : 'red')};
	border-radius: 50%;
	display: inline-block;
`;
ActiveIcon.displayName = 'ActiveIcon';

const View = styled.div`
	margin-top: 12px;
	cursor: pointer;
`;
View.displayName = 'View';

const Report = props => {
	console.log(props);
	return (
		<Wrapper>
			<Title>{props.name}</Title>
			<Type>Type: {props.type}</Type>
			<Frequency>Frequency: {props.frequency}</Frequency>
			<Active>
				Active: <ActiveIcon active={props.active} />
			</Active>
			<View>
				View <Icons chartType={props.chartType} />
			</View>
		</Wrapper>
	);
};

export default Report;
