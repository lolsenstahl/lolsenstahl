import React, {Component} from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import ScrollToTop from './components/ScrollToTop'
import info from './static/data/info.json'
import PageContent from './components/pages/PageContent'
import { color } from './components/theme/Colors'
import ThemeHandler from "./components/theme/ThemeHandler";

// Inject styles directly. Cannot apply styled component to body so inject directly
injectGlobal`
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        position: relative;
        z-index: 0;
        /* Color most closely matches the color where the clipping on iOS occurs */
        // background: ${color.backgroundFallback}; /* Fallback for old browsers */

        // &:after{
        //     content: "";
        //     position: fixed; /* Stretch a fixed position to the whole screen */
        //     top: 0;
        //     height: 100vh; /* Fix for mobile browser address bar appearing disappearing */
        //     left: 0;
        //     right: 0;
        //     z-index: -1; /* Needed to keep in the background */
        //     background: ${color.background};
        //     background-size: 100% 100%;
        // }
    }
`;

const ContentWrapper = styled.div`
    position: absolute;
    margin: 0px;
    padding: 0px;
    
    top: 0;
    z-index: 0;
    overflow-x: hidden;
    min-width: 100vw;
    min-height: 100vh;
    width:100vw;
    height:100vh;
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
    return (
        <HashRouter>
            <ScrollToTop>
                <ThemeHandler>
                    <ContentWrapper>
                        {this.state.data && <PageContent data={this.state.data} />}
                    </ContentWrapper>
                </ThemeHandler>
            </ScrollToTop>
        </HashRouter>
    );
  }
}

export default App;
