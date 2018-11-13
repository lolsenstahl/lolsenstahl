import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import ScrollToTop from './components/ScrollToTop'
import info from './static/data/info.json'
import PageContent from './components/pages/PageContent'
import ThemeHandler from "./components/theme/ThemeHandler";
import './components/fonts.css'

const GlobalStyle = createGlobalStyle`
body {
    background-color:  ${props => props.theme.primaryColor};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    position: relative;
    // z-index: -1;
    // overflow: hidden;
    overflow-y: scroll;
    
    &:after{
        content: "";
        position: fixed; /* Stretch a fixed position to the whole screen */
        top: 0;
        height: 100vh; /* Fix for mobile browser address bar appearing disappearing */
        left: 0;
        right: 0;
        z-index: -1; /* Needed to keep in the background */
        background-color: ${props => props.theme.primaryColor};
        background-size: 100% 100%;
    }
}
  `;
// Inject styles directly. Cannot apply styled component to body so inject directly
// injectGlobal`
//     body {
//         margin: 0;
//         padding: 0;
//         font-family: sans-serif;
//         position: relative;
//         // z-index: -1;
//         // overflow: hidden;
//         overflow-y: scroll;
//
//         // background-color:  ${props => props.theme.primaryColor};
//         /* Color most closely matches the color where the clipping on iOS occurs */
//         // background: ${color.backgroundFallback}; /* Fallback for old browsers */
//
//         &:after{
//             content: "";
//             position: fixed; /* Stretch a fixed position to the whole screen */
//             top: 0;
//             height: 100vh; /* Fix for mobile browser address bar appearing disappearing */
//             left: 0;
//             right: 0;
//             z-index: -1; /* Needed to keep in the background */
//             background-color: black;//${props => props.theme.primaryColor};
//             background-size: 100% 100%;
//         }
//     }
// `;

const ContentWrapper = styled.div`
    position: absolute;
    margin: 0px;
    padding: 0px;
    
    top: 0;
    z-index: 0;
    
    // width:100%;
    height:100%;
    
    // overflow-y: scroll;
    // overflow-x: hidden;
    // Caused scrolltop issues when set
    // min-width: 100vw;
    // min-height: 100vh;
    // width:100vw;
    // height:100vh;
    background-color: ${props => props.theme.primaryColor};
    display: block;
`;

class App extends Component {

    // State definition
    state = {
        data: ""
    };

    componentDidMount() {
        // Set data to JSON data once component has mounted
        this.setState({
            data: info
        })
    }
// {this.state.data && <PageContent data={this.state.data} />}
  render() {
        const baseName = process.env.PUBLIC_URL;
    return (
        <BrowserRouter basename={baseName}>
            <ScrollToTop>
                <ThemeHandler>
                    <GlobalStyle/>
                    {/*<ContentWrapper>*/}
                        {this.state.data && <PageContent data={this.state.data} />}
                    {/*</ContentWrapper>*/}
                </ThemeHandler>
            </ScrollToTop>
        </BrowserRouter>
    );
  }
}

export default App;