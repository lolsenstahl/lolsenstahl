import React, {Component} from 'react'
import styled from 'styled-components'
import PieChart from 'react-minimal-pie-chart';

const CircleContainer = styled.div`
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

const SelectorContainer = styled.div`
    position: relative;
    top: 0%;
    left:0%;
    margin: 1px;
    width: 100%; 
    height: 100%;

    
    &:hover ${CircleContainer}
    {
        transform: rotate(15deg) scale(1);
    }
`;

class ThemeSelector extends Component {
    segments;

    constructor(props)
    {
        super(props);

        // Create segment data
        const data = this.props.segments.map((segment, i) =>
                    (
                        {
                            key: i,
                            value: 1,
                            color: segment.color,
                        }
                    ));

        this.onSegmentClick = this.onSegmentClick.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);

        // Set state
        this.state = {
            data: data,
            onSegmentClick: this.props.onSegmentClick,
            onSegmentEnter: this.props.onSegmentEnter,
            onSegmentExit: this.props.onSegmentExit,
        };
    }

    onMouseOut(e, d, i) {
        this.state.onSegmentExit(i);
    }

    onMouseOver(e, d, i) {
        this.state.onSegmentEnter(i);
    }

    onSegmentClick(e, d, i)
    {
        this.state.onSegmentClick(i);
    }

    render()
    {

        return (
            <SelectorContainer>
                <CircleContainer>
                    <PieChart
                        data={this.state.data}
                        segmentsStyle={{ transition: 'stroke .3s' }}
                        onClick={this.onSegmentClick}
                        startAngle={270}
                        onMouseOver={this.onMouseOver}
                        onMouseOut={this.onMouseOut}
                        animate
                    />
                     <InnerMask/>
                </CircleContainer>
                <InnerDot/>
            </SelectorContainer>
        );
    }
}


export default ThemeSelector