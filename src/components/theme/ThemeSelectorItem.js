
import React, { Component } from "react";
import styled from 'styled-components'

const MenuItem =styled.button`
  position: absolute;
  top: 0; 
  right: 0;
  width: 50%; height: 50%;
  transform-origin: 0% 100%; 
  background-color: red;
  border:none;
  outline:none;
`;

class ThemeSelectorItem extends Component {
    rotateAngle;
    skewYAngle;
    clickHandler;

    render()
    {
        const styles =
        {
            transform: `rotate(${this.props.rotateAngle}deg) rotateY(${this.props.skewYAngle}deg)`,
            backgroundColor: this.props.color,
            zIndex: this.props.zIndex
        };

        return (

            <MenuItem
                    style={styles}
                    onClick={this.props.clickHandler}
            >
            </MenuItem>
        );
    }

}

export default ThemeSelectorItem;