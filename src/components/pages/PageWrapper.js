import React, { Fragment } from 'react'
import styled from 'styled-components'
import { color } from '../theme/Colors'
import * as Text from '../Text'
import NavigationMenu from "../nav/NavMenu";

const TitleOuter = styled.div`
    width: 100vw;
    height: 60vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.15);
    box-shadow: 0 5px 30px 10px rgba(0,0,0,0.15);

    @media (min-width: 600px) {
        height: 260px;
    }

    @media (min-width: 900px) {
        height: 220px;
    }
`;

const TitleInner = styled.div`
    padding: 0 20px;
    box-sizing: border-box;
    border-top: 1px solid ${color.white};
    border-bottom: 1px solid ${color.white};
`;

export const PageTitle = styled.div`
    
`;

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
        {/*<Wrapper>*/}

            <ContentWrapper>
                {children}
            </ContentWrapper>
        {/*</Wrapper>*/}
    </Fragment>
)

export default PageWrapper