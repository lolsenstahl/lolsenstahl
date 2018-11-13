import React, {Fragment} from 'react'
import styled from 'styled-components'
import {P, ParagraphHeading} from "../Text";
import CardBase from "./CardBase";
import LazyLoad from 'react-lazy-load';
import * as Text from "../Text";

const Info = styled.div`
    position: relative;
    text-align: left;
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: left;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`

    @media (max-width: 400px) {
        height: 75px;
        width: 75px;
        min-width:75px;
        min-height:75px;
    }
    height: 120px;
    width: 120px;
    min-width:120px;
    min-height:120px;
    
    object-fit: cover;
    display: block;
    transition: all .25s ease-in-out;
    border-radius:50%;

`;

const ImagePlaceholder = styled.div`

    @media (max-width: 400px) {
        height: 75px;
        width: 75px;
        min-width:75px;
        min-height:75px;
    }
    height: 120px;
    width: 120px;
    min-width:120px;
    min-height:120px;
    
    border-radius:50%;
    display: block;
`;
const iconPath = process.env.PUBLIC_URL + '/images/';

const Description = ({ text }) => (
    <Fragment>
        {text.map(( line,key) => { return <Text.P key={key}> {line} </Text.P>; } )}
    </Fragment>
);

const IconCard = ({icon, heading, description, single, children}) => (
    <CardBase noBanner={true} twoPerRow={!single}>
        <Content>
            <ImagePlaceholder>
                <LazyLoad offset={700} width={100} height={100}>
                    <Icon src={(`${iconPath}${icon}`)}/>
                </LazyLoad>
            </ImagePlaceholder>
            <Info>
                <ParagraphHeading>{heading} </ParagraphHeading>
                {description && <Description text={description}/>}
                {children}
            </Info>
        </Content>
    </CardBase>
);

export default IconCard;