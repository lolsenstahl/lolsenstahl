import styled from 'styled-components'
import './fonts.css'

export const HFont = styled.span`
    font-family: 'title-font', sans-serif;
    text-rendering: optimise-legibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 2px;
`;

export const PFont = styled.span`
    font-family: 'text-font', sans-serif;
`;

export const H1 = styled.h1`
    font-family: 'title-font', sans-serif;
    color: ${props => props.theme.contrastColor};
    font-size: 48px;
    margin: 0;
    text-rendering: optimise-legibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export const Underline = styled.span`
    border-bottom: 4px solid ${props => props.theme.accentColor};
    display:inline;
    &:after,
    &:before {
        content: "";
        display:block;
        margin: 1em 0;
    }
`;

export const H2 = styled.h2`
    font-family: 'title-font', sans-serif;
    color: ${props => props.theme.contrastColor};
    margin: 0;
    text-rendering: optimise-legibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-size: 32px;
    margin-bottom: 25px;
`;

export const H3 = styled.h3`
    font-family: 'title-font', sans-serif;
    color: ${props => props.theme.contrastColor};
    margin: 0;
    text-rendering: optimise-legibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-size: 22px;
    margin-bottom: 25px;
    border-bottom: none;
`;

export const H4 = styled.h4`
    font-family: 'title-font', sans-serif;
    color: ${props => props.theme.contrastColor};
    margin: 0;
    text-rendering: optimise-legibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    @media (max-width: 500px) {
        font-size: 16px;
    }
    font-size: 18px;
    text-shadow: none;
    border-bottom: none;
`;

export const P = styled.p`
    font-family: 'text-font', sans-serif;
    color: ${props => props.theme.contrastColor};
    font-size: 18px;
    @media (max-width: 500px) {
        font-size: 16px;
    }
    margin-bottom: 10px;
    text-rendering: optimise-legibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export const ParagraphHeading = styled(P)`
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: bold;
`;
