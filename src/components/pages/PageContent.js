import React, { Fragment } from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    withRouter
} from 'react-router-dom'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './Home'
import Career from './Career'
import About from './About'
import Contact from './Contact'
import NavigationMenu from "../nav/NavMenu";
import '../fonts.css'
import PageNotFound from "./PageNotFound";

// Site pages
const pages = [
    {title: "Home", path: '/'},
    {title: "About Me", path: '/about'},
    {title: "Software Engineer", path: '/career'},
    {title: "Contact", path: '/contact'}
];

const transitionName = 'fade';

const TransitionWrapper = styled.div`
    padding: 0;
    margin: 0;

    &.${transitionName}-enter {
        opacity: 0.01;
        transform: translateY(50px);
    }
    
    &.${transitionName}-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: all 500ms ease-in-out;
    }
    
    &.${transitionName}-exit {
        opacity: 0;
    }

    &.${transitionName}-exit-active {
        opacity: 0;
    }
`;
const ContentContainer = styled.div`
    margin: 0px;
    padding: 0px;
    
    background-color: ${props => props.theme.primaryColor};
`;

const PageContent = ({ data, location }) => {
    return (
        <ContentContainer>
        <TransitionGroup>
            <CSSTransition
            key={location.key}
            timeout={600}
            classNames={transitionName}
            unmountOnExit
            >
            <TransitionWrapper>
                    <Switch location={location}>
                        <Route exact path='/' render={()=><Home homeItems={pages}/>}/>
                        <Route path='/about' render={()=>
                            <Fragment>
                                <NavigationMenu menuItems={pages}/>
                                <About profile={data.profile} education={data.education}interests={data.interests}/>
                            </Fragment>
                        }/>
                        <Route path='/career' render={()=>
                            <Fragment>
                                <NavigationMenu menuItems={pages}/>
                                <Career skills={data.skills} careerHistory={data.careerHistory} />
                            </Fragment>
                        }/>
                        <Route path='/contact' render={()=>
                            <Fragment>
                                <NavigationMenu menuItems={pages}/>
                                <Contact {...data.contact} />
                            </Fragment>
                        }/>
                    </Switch>
                </TransitionWrapper>
            </CSSTransition>
        </TransitionGroup>
        </ContentContainer>
    )
};

export default withRouter(PageContent)