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
                        {this.state.data && <PageContent data={this.state.data} />}
                </ThemeHandler>
            </ScrollToTop>
        </BrowserRouter>
    );
  }
}

export default App;
