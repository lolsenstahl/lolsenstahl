import React from 'react'
import styled from 'styled-components'
import ThemeSelectorItem from "./ThemeSelectorItem";

const OuterCircle = styled.div`
    // z-index:10;
    transform: rotate(-180deg) scale(0);
    transition: opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;

    overflow: hidden;
    border-radius: 50%;
    pointer-events: auto;
`;
const InnerMask = styled.div`
pointer-events: none;
    position: absolute;
    width: 90%; 
    height: 90%;
    top:5%;
    left:5%;

    border-radius: 50%;


    z-index:10;
    padding: 0;

    background-color:  ${props => props.theme.primaryColor};
`;

const InnerDot = styled.div`
    opacity:1;
    position: absolute;
    width: 10%; 
    height: 10%;
    top:45%;
    left:45%;
    border-radius: 50%;

    z-index:10;
    padding: 0;

    background-color: ${props => props.theme.contrastColor};
`;

const Wrapper = styled.div`
    position: relative;
    top: 0%;
    left:0%;
    margin: 1px;
    width: 100%; 
    height: 100%;

    &:hover ${OuterCircle}
    {
        transform: rotate(15deg) scale(1);
    }
`;


class ThemeSelector extends React.Component {
    segments;

    render() {

        const initZ = 1;
        const numSegments = this.props.segments.length;
        const rotateAngle = 360 / numSegments;
        const skewAngle = 90 - rotateAngle;

        const themeOptions = this.props.segments.map((segment, i) =>
            (
                <ThemeSelectorItem
                    key={i}
                    index={i}
                    color={segment.color}
                    rotateAngle={(i * rotateAngle)}
                    skewYAngle={skewAngle}
                    zIndex={(i === (numSegments - 1))  ? initZ -1 : initZ+i}
                    clickHandler={() =>segment.clickHandler()}
                />
            ));

        return (
            <Wrapper>
                <OuterCircle>
                    {themeOptions}
                    <InnerMask/>
                </OuterCircle>
                <InnerDot/>
            </Wrapper>
        );
    }
}


export default ThemeSelector