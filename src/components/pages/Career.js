import React from 'react'
import * as Text from '../Text'
import PageWrapper from "./PageWrapper";
import styled from 'styled-components'
import WorkExperienceCard from '../cards/WorkExperienceCard'
import '../fonts.css'

const Wrapper = styled.div`
    @media (min-width: 900px) {
        width: 100%;
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

const TextWrapper = styled.div`
    width: 100%;

    @media (min-width: 900px) {
        width: 40%;
        position: sticky;
        top: 100px;
    }
`;

const CardWrapper = styled.div`
    width: 100%;

    @media (min-width: 900px) {
        width: 55%;
    }
`;

const Job = ({ title, company, dates, work }) => (
    <Wrapper>
        <TextWrapper>
            <Text.H3>{title} | {company}</Text.H3>
        </TextWrapper>
        <CardWrapper>
            {work.map(({title, date, description}) => <WorkExperienceCard key={title} title={title} date={date} description={description} />)}
        </CardWrapper>
    </Wrapper>
);

const SkillsWrapper = styled.div`
    width:100%;
`;

const List = styled.ul`
    margin: 0;
    padding-left: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: wrap;
    align-content: stretch;
    width: 100%;
`;

const Point = styled.li`
    list-style-type: square;
    padding-top: 20px;
    width: 25%;
    
    @media (max-width: 800px) {
        width: 50%;
    }
    @media (max-width: 450px) {
        width: 100%;
    }
    color: ${props => props.theme.accentColor};
`;

const Skill = styled.div`
width: 90%`;

const SkillSet = ({skillType, skills}) => (
                <List>{skills.map((point, i) =>
                    <Point key={i} >
                        <Skill>
                        <Text.P>{point}</Text.P>
                        </Skill>
                    </Point> )}
                </List>
);

export default class Career extends React.Component
{
    render()
    {
        return(
            <PageWrapper title='Software Engineer'>
                <Text.H2><Text.Underline>Technical Skills</Text.Underline></Text.H2>
                <SkillsWrapper>
                    {this.props.skills.map(({skillType, skillList}) =>
                        <SkillSet key={skillType} skillType={skillType} skills={skillList}/>
                    )}
                </SkillsWrapper>
                <Text.H2><Text.Underline>Career History</Text.Underline></Text.H2>
                {this.props.careerHistory.map(({title, company, dates, work}) =>
                    <Job key={title} title={title} company={company} dates={dates} work={work} />
                )}
            </PageWrapper>
        );
    }
}
