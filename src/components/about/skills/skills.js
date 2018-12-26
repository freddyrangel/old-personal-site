import React     from 'react';
import styled    from 'styled-components';
import { theme } from 'styles';

const { colors, fontSizes, fonts: { SFMono } } = theme;


const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${SFMono};
  font-size: ${fontSizes.smallish};
  color: ${colors.slate};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`;

const skills = ['JavaScript', 'React', 'Redux', 'Webpack', 'D3', 'TDD',
  'Functional Programing', ]

function Skills() {
  return <SkillsContainer>
    { skills.map((skill, i) => skill && <Skill key={i}>{skill}</Skill>) }
  </SkillsContainer>;
}

export default Skills;
