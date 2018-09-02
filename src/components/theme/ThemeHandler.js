import React from "react";
import {color} from './Colors'
import styled, {ThemeProvider} from "styled-components";
import ThemeSelector from "./ThemeSelector";

// Theme Definitions
const LightTheme =
{
    colorScheme: "light",
    primaryColor: color.offWhite,
    contrastColor: color.offBlack,
    overlayColor: color.offWhite,
    accentColor: color.brightRed
};

const DarkTheme =
{
    colorScheme: "dark",
    primaryColor: color.dark,
    contrastColor: color.offWhite,
    overlayColor: color.dark,
    accentColor: color.darkContrast
};

const RedTheme =
{
    colorScheme: "red",
    primaryColor: color.brightRed,
    contrastColor: color.offWhite,
    overlayColor: color.brightRed,
    accentColor: color.dark
};

const ThemeMenuWrapper = styled.div`
    position:fixed;
    z-index:10;
    bottom: 1vh;
    right: 2vw;
    height:45px;
    width:45px;
    padding-right: 1vw;
    padding-bottom: 2vh;
`;

const Wrapper = styled.div`
    background-color: ${props => props.theme.primaryColor};
    width:100%;
    height:100%;
`;

class ThemeHandler extends React.Component {

    constructor(props)
    {
        super(props);
        this.onLight = this.onLight.bind(this);
        this.onDark = this.onDark.bind(this);
        this.onRedTheme = this.onRedTheme.bind(this);
    }

    // State definition
    state = {
        theme: LightTheme
    };

    componentDidMount() {
        this.setState({
            theme: LightTheme
        })
    }

    onLight()
    {
        this.setState({theme: LightTheme}
        )
    }

    onDark()
    {
        this.setState({theme: DarkTheme}
        )
    }

    onRedTheme()
    {
        this.setState({theme: RedTheme})
    }

    render() {

        const radialThemes = [
            { color: DarkTheme.primaryColor, clickHandler: () => this.onDark()     },
            { color: DarkTheme.primaryColor, clickHandler: () => this.onDark()     },
            { color: LightTheme.primaryColor, clickHandler: () => this.onLight()  },
            { color: LightTheme.primaryColor, clickHandler: () => this.onLight()  },
            { color: RedTheme.primaryColor, clickHandler: () => this.onRedTheme() },
            { color: RedTheme.primaryColor, clickHandler: () => this.onRedTheme() }
        ];

        return (
            <ThemeProvider theme={this.state.theme}>
                <Wrapper>
                    {this.props.children}
                    <ThemeMenuWrapper>
                        <ThemeSelector segments={radialThemes}/>
                    </ThemeMenuWrapper>
                </Wrapper>
            </ThemeProvider>
        );
    }
}

export default ThemeHandler