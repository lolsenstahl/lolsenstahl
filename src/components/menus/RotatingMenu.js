import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {H1, HFont} from "../Text";


const PerspectivePlane = styled.div`
    perspective-origin: 50% 50%;
    position: relative;
    perspective: 100vw;
    // pointer-events: auto;
    height:100%;
`;

const RotatedContainer = styled.div`   
    transform: rotate3d(0, 1, 0, -25deg) translateZ(0) scale(1);
    transform-origin: right;
    transform-style: preserve-3d;
    height:100%;
    width:100%;
    left: 0;
    pointer-events: none
`;

const MenuWrapper = styled.ul`
    list-style-type: none;
    padding: 7px 0;
    margin: 0;

    right: 0;
    text-align: right;
    
    position: relative;
    height:100%;
    display: flex;
    flex-direction: column;
    pointer-events: none
`;

const MenuItem = styled.li`
    
    display: inline-block;
    padding: 0;
    right: 0;
    pointer-events: none;
    transform-style: preserve-3d;
    transform-origin: right;
    width:100%;
`;


const MenuLink = styled(Link)`
    position: relative;
    pointer-events: auto;
    display: inline-block;
    right: 0;
    test-align: right;
    z-index: 1;
    
    
    text-decoration: none;
    margin: 7px 0;
    text-transform: uppercase;
    transition: all 1s, color 0.3s, visibility 0s;
    transform-style: preserve-3d;
    transform-origin: right;
    font-weight: bold;

    font-size: 7vw;
    letter-spacing: 0.02em;
    line-height: 0.9em;

    color: ${props => props.theme.contrastColor};
    -webkit-text-stroke-color:  ${props => props.theme.contrastColor};
    -webkit-text-stroke-width: 1px;
    
    &:hover, &:focus {
        // text-shadow: 5px 5px red;
        z-index:2;
        transform-origin: right;
        transform: rotate3d(0, 1, 0, 15deg) translateZ(0) scale(1);
        @supports ((-webkit-text-stroke: 3px #000) or (text-stroke: 3px #000)) {
            color: transparent;
        }
    }
`;


class RotatingMenu extends Component
{
    render() {
        // const pages = this.props.menuItems;
        console.log(this.props.menuItems);
        // [
        //     {title: "About Me", path: "/about"},
        //     {title: "Software Engineer", path: "/career"},
        //     {title: "Let's Talk", path: "/contact"}
        //     ];
        const test = this.props.menuItems.map((page, index) => {
            return (
                <MenuItem
                    key={index}>
                    <MenuLink
                        exact={true}
                        to={page.path}
                    >
                        <HFont>{page.title}</HFont>
                    </MenuLink>
                </MenuItem>
            )
        });

        return (
            <PerspectivePlane>
                <RotatedContainer>
                    <MenuWrapper>
                        {test}
                    </MenuWrapper>
                </RotatedContainer>
            </PerspectivePlane>
        );
    }
}


export default RotatingMenu