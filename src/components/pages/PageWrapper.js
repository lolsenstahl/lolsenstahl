import React, { Fragment } from 'react'
import styled from 'styled-components'
const ContentWrapper = styled.div`
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    
    padding-right: 10vw;
    padding-left: 10vw;
    
    @media (max-width: 500px) {
        padding-right: 5vw;
        padding-left: 5vw;
    }

    @media (min-width: 1000px) {
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