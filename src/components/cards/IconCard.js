import React from 'react'
import styled from 'styled-components'
import {P, PH} from "../Text";
import CardBase from "./CardBase";

const Info = styled.div`
    position: relative;
    text-align: left;
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: left;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    position: relative;
    height: 120px;
    width: 120px;
    left: 0;
    display: inline-block;
    transition: all .25s ease-in-out;
    border-radius:50%;
`;

const IconCard = ({icon, heading, text, single}) => (
    <CardBase noBanner={true} twoPerRow={!single}>
        <Content>
            <Icon src={icon}/>
            <Info>
                <PH>{heading} </PH>
                <P>{text}</P>
            </Info>
        </Content>
    </CardBase>
);

export default IconCard;