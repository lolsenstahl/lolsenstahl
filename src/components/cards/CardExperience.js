import React from 'react'
import styled from 'styled-components'
import CardBase from './CardBase'
import * as Text from '../Text'

const List = styled.ul`
    margin: 0;
    padding-left: 20px;
`;

const Point = styled.li`
    list-style-type: square;
    padding-top: 20px;
    color: ${props => props.theme.accentColor};
`;

const CardExperience = ({ title, date, description }) => (
    <CardBase hasList title={title} subTitle={date}>
        <List>{description.map((point, i) => <Point key={i} ><Text.P>{point}</Text.P></Point> )}</List>
    </CardBase>
);

export default CardExperience