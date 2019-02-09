import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	float: left;
`;

const Title = styled.h3``;
Title.displayName = 'Title';

const Type = styled.p``;
Type.displayName = 'Type';

const Frequency = styled.p``;
Frequency.displayName = 'Frequency';

const View = styled.button``;
View.displayName = 'View';

const Active = styled.div``;
Active.displayName = 'Active';

const Report = props => {
	return (
		<Wrapper>
			<Title>{props.name}</Title>
			<Type>Type: {props.type}</Type>
			<Frequency>Frequency: {props.frequency}</Frequency>
			<Active>
				{props.active ? (
					<View>View</View>
				) : (
					<p>Sorry this report is no longer active</p>
				)}
			</Active>
		</Wrapper>
	);
};

export default Report;
