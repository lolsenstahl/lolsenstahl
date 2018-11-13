import React, { Fragment } from 'react'
import styled from 'styled-components'
import { color } from '../theme/Colors'
import * as Text from '../Text'
import NavigationMenu from "../nav/NavMenu";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ScrollToTop from "../ScrollToTop";
const ContentWrapper = styled.div`
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    
    padding-right: 10vw;
    padding-left: 10vw;
    
    @media (max-width: 500px) {
        // padding: 50px;
        padding-right: 50px;
        padding-left: 50px;
    }

    @media (min-width: 1000px) {
        // width: 900px;
        // padding-right: 5vw;
        // padding-left: 5vw;
        margin: auto;
    }
`;


const PageWrapper = ({title, children}) => (
    <Fragment>
        <ContentWrapper>
                {children}
        </ContentWrapper>
    </Fragment>
);

export default PageWrapper