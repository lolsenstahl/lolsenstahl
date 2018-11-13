import React, {Component} from "react";
import {color} from './Colors'
import styled, {ThemeProvider} from "styled-components";
import RadialMenu from "../menus/RadialMenu";

// Theme Definitions
const LightTheme =
{
    colorScheme: "light",
    primaryColor: color.offWhite,
    contrastColor: color.dark,
    overlayColor: color.offWhite,
    accentColor: color.brightRed
};

const DarkTheme =
{
    colorScheme: "dark",
    primaryColor: color.dark,
    contrastColor: color.brightRed,
    overlayColor: color.dark,
    accentColor: color.offWhite
};

const RedTheme =
{
    colorScheme: "red",
    primaryColor: color.brightRed,
    contrastColor: color.dullWhite,
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
    
    @media (max-width: 500px) {
        right: 0.5vw;
        transform: scale(0.75);
    }
`;

const Wrapper = styled.div`
    background-color: ${props => props.theme.primaryColor};
    width:100%;
    height:100%;
`;

class ThemeHandler extends Component {

    constructor(props)
    {
        super(props);
        this.onThemeSelection = this.onThemeSelection.bind(this);
        this.onThemeEnter = this.onThemeEnter.bind(this);
        this.onThemeExit = this.onThemeExit.bind(this);

        const colorThemes = [
            { color: LightTheme.primaryColor, contrast: LightTheme.contrastColor, theme: LightTheme},
            { color: DarkTheme.primaryColor, contrast: DarkTheme.contrastColor,theme: DarkTheme},
            { color: RedTheme.primaryColor, contrast: RedTheme.contrastColor,theme: RedTheme}
        ];

        this.state = {
            currentTheme: LightTheme,
            selectedTheme: LightTheme,
            themeSelectColor: LightTheme.contrastColor,
            themes: colorThemes,
        };
    }

    componentDidMount() {
        // this.setState({
        //     currentTheme: LightTheme
        // })
    }

    onThemeSelection(index)
    {
        const updateTheme = this.state.themes[index].theme;
        this.setState({currentTheme: updateTheme, selectedTheme: updateTheme,themeSelectColor: updateTheme.contrastColor });
    }

    // Preview the hovered theme
    onThemeEnter(index)
    {
        this.setState({themeSelectColor: this.state.themes[index].theme.primaryColor });
    }

    // Restore the selected theme
    onThemeExit(index)
    {
        this.setState({themeSelectColor: this.state.selectedTheme.contrastColor});
    }

    render() {

        return (
            <ThemeProvider theme={this.state.currentTheme}>
                <Wrapper>
                    {this.props.children}
                    <ThemeMenuWrapper>
                        <RadialMenu segmentColors={this.state.themes}
                                    onSegmentClick={(index) => this.onThemeSelection(index)}
                                    onSegmentEnter={(index) => this.onThemeEnter(index)}
                                    onSegmentExit={(index) => this.onThemeExit(index)}
                                    dotColor={this.state.themeSelectColor}
                        />
                    </ThemeMenuWrapper>
                </Wrapper>
            </ThemeProvider>
        );
    }
}

export default ThemeHandler