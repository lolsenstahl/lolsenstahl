import React from 'react'
import styled from 'styled-components'
import * as Text from '../Text'
import alpha from "color-alpha";
import {PFont} from "../Text";
import {HFont} from "../Text";

const Wrapper = styled.div`
    margin-bottom: 20px;
    border-radius: 5px;
    border: ${props => props.noBorder ? 'none' : `1px solid ${props.theme.contrastColor}`};
    box-shadow: ${props => props.noBorder ? 'none' : `3px 6px 0px ${alpha(props.theme.contrastColor, .2)}`};

    @media (max-width: 900px) {
        width: 100%;
    }
    @media (min-width: 400px) {
        
        margin-bottom: 30px;
    }
    
    @media (min-width: 900px) {
        width: ${props => props.twoPerRow ? '47%' : '100%'};
        margin-bottom: 50px;
    }
`;

const Banner = styled.div`
    padding: 15px 20px;
    border-radius: 4px 4px 0 0;
    background-color: ${props => props.bannerColor ? props.bannerColor : 'undefined'}
    border-bottom: ${props => props.noBorder ? 'none' : `1px solid ${props.theme.contrastColor}`};
`;

const Content = styled.div`
    padding: ${props => props.hasList ? '20px 20px 40px' : '20px'};
`;

const CardBase = ({noBanner, hasList, twoPerRow, title, subTitle, bannerColor, noBorder, children }) => (
    <Wrapper twoPerRow={twoPerRow} noBorder={noBorder}>
        {!noBanner &&
            <Banner bannerColor={bannerColor} noBorder={noBorder}>
                <Text.H4><HFont>{title}</HFont></Text.H4>
                {subTitle && <Text.P>{subTitle}</Text.P>}
            </Banner>
        }
        <Content hasList={hasList}>
            {children}
        </Content>
    </Wrapper>
);

export default CardBase