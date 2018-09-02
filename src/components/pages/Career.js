import React from 'react'
import * as Text from '../Text'
import PageWrapper from "./PageWrapper";
import styled from 'styled-components'
import CardExperience from '../cards/CardExperience'
import CardBase from "../cards/CardBase";
import {color} from "../theme/Colors";
import {PH} from "../Text";

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

const Job = ({ title, company, work }) => (
    <Wrapper>
        <TextWrapper>
            <Text.H3>{title} | {company}</Text.H3>
        </TextWrapper>
        <CardWrapper>
            {work.map(({title, date, description}) => <CardExperience key={title} title={title} date={date} description={description} />)}
        </CardWrapper>
    </Wrapper>
);

const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const List = styled.ul`
    margin: 0;
    padding-left: 20px;
    align-items: center;

`;

const Point = styled.li`
    list-style-type: square;
    padding-top: 20px;
    color: ${props => props.theme.accentColor};
`;

const Content = styled.div`
    display: flex;
    align-items: center;
            
    @media (max-width: 749px) {
        width: 47%;
        margin-bottom: 50px;
    }
    
    @media (min-width: 750px) {
            width: 22%;
            margin-bottom: 50px;
    }
`;

const SkillSet = ({skillType, skills}) => (
        <Content>
            <List>{skills.map((point, i) =>
                <Point key={i} ><Text.P>{point}</Text.P></Point> )}
            </List>
        </Content>
);

export default class Career extends React.Component
{
    render()
    {
        console.log("Render career");
        return(
            <PageWrapper title='Software Engineer'>
                {/* <h3>{coreSkills}</h3> */}
                <Text.H2>Technical Skills</Text.H2>
                <SkillsWrapper>
                    {this.props.skills.map(({skillType, skillList}) =>
                        <SkillSet key={skillType} skillType={skillType} skills={skillList}/>
                    )}
                </SkillsWrapper>
                <Text.H2>Career History</Text.H2>
                {this.props.careerHistory.map(({title, company, work}) =>
                    <Job key={title} title={title} company={company} work={work} />
                )}
            </PageWrapper>
        );
    }
}
