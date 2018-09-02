import styled from 'styled-components'
import { color } from './theme/Colors'

import './fonts.css'

export const HFont = styled.span`
    font-family: 'Druk-WideMedium', sans-serif;
    text-rendering: optimise-legibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 2px;
`;

export const PFont = styled.span`
    font-family: 'AkzidenzGrotConBQ-Medium', sans-serif;
`;

export const H1 = styled.h1`
    font-family: 'Druk-WideMedium', sans-serif;
    color: ${props => props.theme.contrastColor};
    font-size: 48px;
    margin: 0;
    
    text-rendering: optimise-legibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    

}
`;

export const Underline = styled.span`
    border-bottom: 1px solid ${props => props.theme.accentColor};
    display:inline;
    &:after,
    &:before {
        content: "";
        display:block;
        margin: 1em 0;
    }
`;

export const H2 = H1.withComponent('h2').extend`
    font-size: 32px;
    margin-bottom: 25px;
`;

export const H3 = H1.withComponent('h3').extend`
    font-size: 22px;
    margin-bottom: 25px;
    border-bottom: none;
`;

export const H4 = H1.withComponent('h4').extend`
    font-size: 18px;
    text-shadow: none;
    border-bottom: none;
`;

export const P = styled.p`
    font-family: 'AkzidenzGrotConBQ-Medium', sans-serif;
    color: ${props => props.theme.contrastColor};
    font-size: 18px;
    margin: 0;
    text-rendering: optimise-legibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;


export const PH = P.extend`
    font-size: 20px;
    margin-bottom: 5px;
`;

// export const Date = P.extend`
//     color:  ${props => props.theme.contrastColor};
// `;