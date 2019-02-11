import React from 'react';
import styled from 'styled-components';
import Icon from './Icons';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
`;

const Item = styled.div`
	width: 35%;
	padding: 8px;
	border-top: 1px solid #ccc;
	border-right: 1px solid #ccc;
	text-align: center;
`;
Item.displayName = 'Item';

const Title = styled(Item)`
	font-size: 16px;
	font-weight: normal;
	margin: 0;
	text-align: left;
`;
Title.displayName = 'Title';

const Type = styled(Item)`
	width: 15%;
`;
Type.displayName = 'Type';

const Frequency = styled(Item)`
	width: 15%;
`;
Frequency.displayName = 'Frequency';

const Active = styled(Item)`
	width: 10%;
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

const Chart = styled(Item)`
	width: 15%;
`;
Chart.displayName = 'Chart';

const Delete = styled(Item)`
	width: 10%;
	cursor: pointer;
`;
Delete.displayName = 'Delete';

const Report = props => {
	return (
		<Wrapper>
			<Title>{props.name}</Title>
			<Type>{props.type}</Type>
			<Frequency>{props.frequency}</Frequency>
			<Chart>
				<Icon icon={props.chartType} />
			</Chart>
			<Active>
				<ActiveIcon active={props.active} />
			</Active>
			<Delete onClick={props.deleteReport}>
				<Icon icon="delete" />
			</Delete>
		</Wrapper>
	);
};

export default Report;
