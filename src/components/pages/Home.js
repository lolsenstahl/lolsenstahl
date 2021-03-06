import React, {Component} from 'react'
import styled from 'styled-components'
import '../fonts.css'
import { H1, P } from '../Text'
import RotatingMenu from "../menus/RotatingMenu";
import PageWrapper from "./PageWrapper";

const IntroP = styled(P)`
    @media (min-width: 375px) {
        font-size: 20px;
    }

    @media (min-width: 400px) {
        font-size: 24px;
    }
`;

const Title = styled(H1)`
    font-family: 'title-font', sans-serif;
    text-rendering: optimise-legibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 2px;
    
    font-size: 40px;
    font-weight: normal;
    line-height: 0.85em;
    white-space: pre-line;
   
    @media (max-width: 500px) {
        font-size: 7vw;
        padding-top: 10vh;
    }
    
    color: ${props => props.theme.contrastColor};
    -webkit-text-stroke-color:  ${props => props.theme.contrastColor};
    -webkit-text-stroke-width: 1px;
    
    &:hover, &:focus {
        transition: all 1s, color 0.3s;
        @supports ((-webkit-text-stroke: 3px #000) or (text-stroke: 3px #000)) {
            color: transparent;
        }
    }
`;

const ContentWrapper = styled.div`
height:75vh;
width:100%

@media (max-width: 500px) {
    height:70vh;
}
`;

export default class Home extends React.Component {

    render(){
        const items = this.props.homeItems.slice(1);
        return(
            <PageWrapper>
                <ContentWrapper>
                    <IntroP>HI MY NAME IS</IntroP>
                    <RotatingMenu menuItems={items}/>
                </ContentWrapper>
                <Title>{`LOUIS\nOLSEN-STAHL`}</Title>
            </PageWrapper>
        );
    }
}
