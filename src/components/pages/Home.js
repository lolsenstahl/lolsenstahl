import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { ArrowRight } from '../Arrow'
import { H1, P } from '../Text'
import { color } from '../theme/Colors'
import RotatingMenu from "../menus/RotatingMenu";
import PageWrapper from "./PageWrapper";

const Nav = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    text-decoration: none;
`

const Text = H1.extend`
    font-family: 'Poppins', sans-serif;
    color: ${color.white};
    font-size: 40px;
    font-weight: normal;
    line-height: 1.2;
    transition: all .15s ease-in-out;
    width: 80%;
    text-shadow: none;

    @media (min-width: 375px) {
        font-size: 46px;
    }

    @media (min-width: 400px) {
        font-size: 50px;
    }

    @media (min-width: 600px) {
        font-size: 38px;
    }

    @media (min-width: 900px) {
        font-size: 60px;
        width: 95%;
    }

    @media (min-width: 1200px) {
        font-size: 70px;
    }

    &:hover {
        transition: all .15s ease-in-out;
        color: ${color.orange};
    }
`

const IntroP = P.extend`
    @media (min-width: 375px) {
        font-size: 20px;
    }

    @media (min-width: 400px) {
        font-size: 24px;
    }
`;

const TitleWrapper = styled.div`
    height:auto;
    display: inline-block;
    position: fixed;
    pointer-events: auto;
    left: 5vw;
    top:0;
    z-index:1;
    bottom: 5vh;
    transition-duration: 1s;
    transform: translateY(calc(95vh - 100px));
`;

const Title = H1.withComponent('HFont').extend`
    font-size: 40px;
    font-weight: normal;
    line-height: 0.85em;
    white-space: pre-line;s
    // transition: all .15s ease-in-out;
    // width: 80%;
    // text-shadow: none;
    
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
height:70vh;
width:100%`;

export default class Home extends React.Component {

    render(){
        console.log("Render Home");
        const items = this.props.homeItems.slice(1);
        console.log(this.props.homeItems.slice(1));
        return(
            <PageWrapper>
                <ContentWrapper>
                    <IntroP>HI MY NAME IS</IntroP>
                    <RotatingMenu menuItems={items}/>
                </ContentWrapper>
                <TitleWrapper>
                    <Title>{`LOUIS\nOLSEN-STAHL`}</Title>
                </TitleWrapper>
            </PageWrapper>
        );
    }
}
