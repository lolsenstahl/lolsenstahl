import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import alpha from "color-alpha";
import RotatingMenu from "../menus/RotatingMenu";


const DisplayContainer = styled.div`
    z-index:1;
    position: fixed;
    top:0;
    left:0;
    margin:0;   
    padding: 0;
    height: 100vh;
    background-color: ${props => alpha(props.theme.overlayColor, .9)};
    visibility: ${props => props.open ? 'visible' : 'hidden'};
`;

const ContentWrapper = styled.div`
padding-right: 7vw;
padding-left: 7vw;
padding-top: 10vh;
`;

// Hamburger Toggle Button
const MenuButtonWrapper = styled.div`
    position: fixed;
    z-index:1;
    top: 5vh;
    right: 2vw;
    margin-right: 2vw;
    visibility: visible;
    width: 32px;
    height: 32px;
    
    @media (max-width: 500px) {
        right: 0.5vw;
        transform: scale(0.75);
    }
`;


const NavigationButton = styled.button`
    position: relative;
    opacity: 1;
    z-index:10;
    width: 100%;
    height: 100%;
    display: block;
    padding: 0;
    margin:auto;
    // margin: 0;
    background-color: inherit;
    border: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const LineTop = styled.div`
    position: absolute;
    top:5px;
    width: 32px;
    height: 2px;
    background-color:  ${props => props.theme.contrastColor}
    transition: all 0.3s, translate 0s;
    transform-origin: 50% 50%;
    transform: ${props => props.open ? 'translate(0px, 10px) rotate(45deg) ': 'translate(0px, 0px)'};
`;

const LineMid = styled(LineTop)`
    transform: translate(0px, 10px);
    opacity: ${props => props.open ? '0' : '1'};
`;

const LineBot = styled(LineTop)`
    transform: ${props => props.open ? 'translate(0px, 10px) rotate(-45deg) ' : 'translate(0px, 20px)'};
`;

const MenuWrapper = styled.div`
display: inline-block;
width: auto;
height:80vh;
right:0;
`;

export default class NavigationMenu extends Component {

    state = { menuOpen: false };

    toggleMenuOpen = () => {
        this.setState(prevState => ({
            menuOpen: !(prevState.menuOpen)
        }));
    };

    render() {
        return(
            <DisplayContainer open={this.state.menuOpen} >
                <MenuButtonWrapper>
                        <NavigationButton onClick={this.toggleMenuOpen}>
                            <LineTop open={this.state.menuOpen}/>
                            <LineMid open={this.state.menuOpen}/>
                            <LineBot open={this.state.menuOpen}/>
                        </NavigationButton>
                </MenuButtonWrapper>
                <ContentWrapper>
                    <MenuWrapper onClick={this.toggleMenuOpen}>
                        <RotatingMenu menuItems={this.props.menuItems}/>
                    </MenuWrapper>
                </ContentWrapper>
            </DisplayContainer>
        )
    }

}
