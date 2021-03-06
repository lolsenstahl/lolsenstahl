import React from 'react'
import styled from 'styled-components'
import PageWrapper from './PageWrapper'
import CardBase from '../cards/CardBase'
import '../fonts.css'
import { color } from '../theme/Colors'

// Explicit import as limited number of icons used.
// Allows icons to be subsetted, optimizing final bundle. Only icons imported are included in the bundle

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithubSquare,
    faFacebook,
    faSpotify
} from '@fortawesome/free-brands-svg-icons'
import {H1, Underline} from "../Text";

const Wrapper = styled.div`
    @media (min-width: 900px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.accentColor};
    font-size: 30px;
`;

const Link = styled.a`
    font-family: 'text-font', sans-serif;
    color: ${props => props.theme.contrastColor};
    padding-left: 15px;
    margin: 0;
    display: block;
    font-size: 16px;
    text-decoration: none;
`;

const Title = styled(H1)`
text-align: center;
padding-bottom: 20px;
`;

export default class Contact extends React.Component
{
    render()
    {
        const email = this.props.email;
        const mobile = this.props.mobile;
        const linkedIn = this.props.linkedIn;
        const github = this.props.github;
        const facebook = this.props.facebook;
        const spotify = this .props.spotify;

        return(
            <PageWrapper title='Contact'>
                <Title><Underline>Get in Touch</Underline></Title>
                <Wrapper>
                    <CardBase title='Email' twoPerRow >
                        <Content>
                            <Icon icon={faEnvelopeSquare}/>
                            <Link href={"mailto:" + email + "?subject=Enquiries"}>{email}</Link>
                        </Content>
                    </CardBase>
                    <CardBase title='LinkedIn' twoPerRow >
                        <Content>
                            <Icon icon={faLinkedin}/>
                            <Link target="_blank" rel="noopener noreferrer" href={linkedIn}>louis-olsen-stahl</Link>
                        </Content>
                    </CardBase>
                    <CardBase title='Mobile' twoPerRow>
                        <Content>
                            <Icon icon={faPhoneSquare}/>
                            <Link href={"tel:" + mobile}>{mobile}</Link>
                        </Content>
                    </CardBase>
                    <CardBase title='Github' twoPerRow>
                        <Content>
                            <Icon icon={faGithubSquare}/>
                            <Link target="_blank" rel="noopener noreferrer" href={github}>lolsenstahl</Link>
                        </Content>
                    </CardBase>
                    <CardBase title='Facebook' twoPerRow >
                        <Content>
                            <Icon icon={faFacebook}/>
                            <Link target="_blank" rel="noopener noreferrer" href={facebook}>Facebook</Link>
                        </Content>
                    </CardBase>
                    <CardBase title='Spotify' twoPerRow>
                        <Content>
                            <Icon icon={faSpotify}/>
                            <Link target="_blank" rel="noopener noreferrer" href={spotify}>Spotify</Link>
                        </Content>
                    </CardBase>
                </Wrapper>
            </PageWrapper>
        );
    }
}