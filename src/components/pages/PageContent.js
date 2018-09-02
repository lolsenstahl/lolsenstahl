import React, { Fragment } from 'react'
import {
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
import PageNotFound from "./PageNotFound";

const transitionName = 'pg';

const Wrapper = styled.div`
    padding: 0;
    margin: 0;

    &.${transitionName}-enter {
        opacity: 0.1;
        transform: translate(-100px);
    }

    &.${transitionName}-enter-active {
        opacity: 1;
        transform: translate(0);
        transition: all 300ms ease-in-out;
    }

    &.${transitionName}-exit {
        opacity: 0;
    }

    &.${transitionName}-exit-active {
        opacity: 0;
    }
`

// Site pages
const pages = [
    {title: "Home", path: '/'},
    {title: "About Me", path: '/about'},
    {title: "Software Engineer", path: '/career'},
    {title: "Let's Talk", path: '/contact'}
];

const PageContent = ({ data, location }) => {
    // Loop through pages and generate Route for each
    // Figure out how to only render once
    // const routeLinks = pages.map(page => {
    //     const path = page.path;
    //     let pageType;
    //
    //     console.log(page.path);
    //     switch(path) {
    //         case ('/about'):
    //             console.log("About: " + page.path);
    //             // pageType = <About page="About page" />;
    //             break;
    //         case ('/career'):
    //             console.log("Career: " + page.path);
    //             pageType = <Career coreSkills={data.coreSkills} careerHistory={data.careerHistory} />;
    //             break;
    //         case ('/contact'):
    //             console.log("Contact: " + page.path);
    //             // pageType = <Contact {...data.contact}/>;
    //             break;
    //         // case ('/'):
    //         //     pageType = <Home homeItems={pages}/>;
    //         //     break;
    //         default:
    //             // console.log("Home: " + page.path);
    //             pageType = <Home homeItems={pages}/>;
    //             break;
    //     }
    //     console.log(pageType);
    //
    //     return (
    //         <Route key={path}
    //                exact path={path}
    //                component={pageType}
    // // () => {
    // //                    return (
    // //                        <Fragment>
    // //                            <NavigationMenu menuItems={pages}/>
    // //                            {pageType}
    // //                        </Fragment>
    // //                    )}
    // //                }
    //         />
    //     )
    // });

    return (
        <Switch location={location}>
            <Route exact path='/' render={()=><Home homeItems={pages}/>}/>
            <Route path='/about' render={()=>
                <Fragment>
                    <NavigationMenu menuItems={pages}/>
                    <About/>
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
    )
}

export default withRouter(PageContent)