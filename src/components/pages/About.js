import React from 'react'
import styled from 'styled-components'
import PageWrapper from './PageWrapper'
import * as Text from '../Text'
import LouisImg from '../../static/media/pic.jpg';

import IconCard from '../cards/IconCard'

import Paris from '../../static/media/paris.jpg';
import Berlin from '../../static/media/berlin.jpg';
import London from '../../static/media/london.jpg';
import Fuji from '../../static/media/fuji_shrine.jpg';
import GarageProject from '../../static/media/gp.png'
import Chinoiserie from '../../static/media/chinoiserie.jpg';

import Toni from '../../static/media/toni_erdmann.jpg'
import KillBill from '../../static/media/kill_bill.jpg'

import PK from '../../static/media/kalkbrenner.jpg'
import Kills from '../../static/media/kills.jpg'
import Andhim from '../../static/media/andhim.png'
import FFD from '../../static/media/ffd.jpg'

import UoA from '../../static/media/uoa.png'

const Hero = styled.img`
    height: 220px;
    width: 220px;
    margin: auto;
    display: block;
    transition: all .25s ease-in-out;
    border-radius:50%;

    &:hover {
        opacity: 0.7;
     }
 `;

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default class About extends React.Component
{
    render()
    {
        console.log("Render About");
        return(
            <PageWrapper title='About'>
                <Hero src={LouisImg} />
                <Text.H2>Profile</Text.H2>
                <Text.P>Hey this is me</Text.P>

                <Text.H3>Education</Text.H3>
                <IconCard icon={UoA}
                          single
                          heading={'The University of Auckland'}
                          text={'Bachelor of Engineering in Electrical and Electronic Engineering with First Class Honours'}/>
                <Text.H2>Interests</Text.H2>
                <Text.H3>Travel</Text.H3>
                <Text.P>I've always had an interest in exploring new cultures, environments and enjoy the feeling
                    of discovering new  and different places around the world.
                </Text.P>
                <CardWrapper>
                    <IconCard icon={Fuji} heading={'Japan'} text={''}/>
                    <IconCard icon={Paris} heading={'France'} text={''}/>
                    <IconCard icon={Berlin} heading={'Germany'} text={''}/>
                    <IconCard icon={London} heading={'UK'} text={''}/>
                </CardWrapper>
                
                <Text.H3>Technology</Text.H3>
                <Text.H3>Film</Text.H3>
                <CardWrapper>
                    <IconCard icon={Toni} heading={'Toni Erdmann'} text={''}/>
                    <IconCard icon={KillBill} heading={'Kill Bill'} text={''}/>
                </CardWrapper>
                <Text.H3>Music</Text.H3>
                <CardWrapper>
                    <IconCard icon={PK} heading={'Paul Kalkbrenner'} text={'Feed your head, Let me hear you scream, Sky and Sand'}/>
                    <IconCard icon={Kills} heading={'The Kills'} text={'Tape Song, Last Day of Magic, Love is a Deserter, Rodeo Town'}/>
                    <IconCard icon={Andhim} heading={'Andhim'} text={'Hausch, Boy Boy Boy'}/>
                    <IconCard icon={FFD} heading={'Fat Freddy\'s Drop'} text={'Blackbird, Wandering Eye'}/>
                </CardWrapper>

                <Text.H3>Good Food</Text.H3>
                <CardWrapper>
                    <IconCard icon={GarageProject} heading={'Garage Project'} text={'Fantastic craft brewery based in Wellington, NZ'}/>
                    <IconCard icon={Chinoiserie} heading={'Chinoiserie'} text={'Great fusion eatery in Auckland, NZ'}/>
                </CardWrapper>
            </PageWrapper>
        );
    }
}
