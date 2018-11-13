import React, {Fragment} from 'react'
import styled from 'styled-components'
import * as Text from '../Text'
import PageWrapper from './PageWrapper'
import IconCard from '../cards/IconCard'
import TextCard from '../cards/TextCard'
import '../fonts.css'
// Image Imports
import LouisImg from '../../static/media/pic.jpg';
import CardBase from "../cards/CardBase";

const Hero = styled.img`
    height: 220px;
    width: 220px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    display: block;
    transition: all .25s ease-in-out;
    border-radius:50%;

    @media (max-width: 400px) {
        height: 175px;
        width: 175px;
    }
    &:hover {
        opacity: 0.7;
     }
 `;

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const EducationItemContainer = styled.div`
    padding-top: 20px;
`;

const List = styled.ul`
    margin: 0;
    padding-left: 20px;
`;

const Point = styled.li`
    list-style-type: square;
    color: ${props => props.theme.accentColor};
`;

const EducationItem = ({title, date, description }) => (
    <EducationItemContainer>
        {title && <Text.ParagraphHeading>{title}</Text.ParagraphHeading>}
        <List>
            {description.map((point, i) =>
                <Point key={i} ><Text.P>{point}</Text.P>
                </Point> )}
        </List>
    </EducationItemContainer>
);

const EducationCard = ({ title, date, educationItems }) => (
    <CardBase hasList title={title} subTitle={date}
    >
        {educationItems.map((point, i) =>
            <EducationItem key={i} title={point.title} date={point.date} description={point.description}/>
            )}
    </CardBase>
);

const Interest =({title, description, subsections }) => (
    <Fragment>
        {title && <Text.H3>{'> ' + title}</Text.H3>}
        <CardWrapper>
            {description && <TextCard text={description}/>}
            {subsections && subsections.map(({title, icon, text}) =>
                <IconCard key={title} icon={icon} heading={title} description={text} />)}
        </CardWrapper>
    </Fragment>

);

const ProfileSection = ({title, description }) => (
    <Fragment>
        {title && <Text.H3>{title}</Text.H3>}
        <CardWrapper>
            {description && <TextCard text={description}/>}
        </CardWrapper>
    </Fragment>

);

export default class About extends React.Component
{
    render()
    {
        const Interests = this.props.interests.map( ({title, description, subsections}) =>
            <Interest key={title} title={title} description={description} subsections={subsections}/>);

        const ProfileSections = this.props.profile.map( ({title, description}) =>
            <ProfileSection key={title} title={title} description={description}/>);

        const Education = this.props.education.map( ({title, date, education}) =>
            <EducationCard key={title} title={title} date={date} educationItems={education}/>);

        return(
            <PageWrapper title='About'>
                <Hero src={LouisImg} />
                <Text.H2><Text.Underline>Profile</Text.Underline></Text.H2>
                {ProfileSections}
                <Text.H2><Text.Underline>Education</Text.Underline></Text.H2>
                {Education}
                <Text.H2><Text.Underline>Interests</Text.Underline></Text.H2>
                {Interests}
            </PageWrapper>
        );
    }
}
