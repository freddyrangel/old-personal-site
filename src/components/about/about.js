import React, { Component }                       from 'react';
import SR                                         from 'scrollreveal';
import styled                                     from 'styled-components';
import { srConfig }                               from 'utils';
import avatar                                     from 'images/devweek.jpg'
import { Section, Heading, mixins, media, theme } from 'styles';

const { colors, fontSizes, fonts, borderRadius, transition } = theme;

const AboutContainer = styled(Section)`
  position: relative;
`;

const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;

const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`display: block;`};
  a {
    ${mixins.inlineLink};
  }
`;

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;

const PicContainer = styled.div`
  position: relative;
  mix-blend-mode: multiply;
  filter: greyscare(100%) contrast(1);
  border-radius: ${borderRadius};
  transition: ${transition};
`;

const Avatar = styled.img`
  position: relative;
  filter: grayscale(100%) contrast(1);
  border-radius: ${borderRadius};
  transition: ${transition};
  max-height: 300px;
  max-width: 300px;
`;

const AvatarContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${borderRadius};
  border-color: ${colors.green};
  margin-left: -20px;
  max-width: 300px;
  max-height: 300px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${borderRadius};
    transition: ${transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

function Description() {
  return <p>
    I'm a software engineer, contributor to React, and author of "React Under the Hood: A Beginner's Guide". I'm an expert on React, Redux, ES6, functional programming, and D3. I'm a regular speaker at conferences and occasionally teach JavaScript workshops in San Francisco and other cities.
  </p>;

}

export default class About extends Component {
  componentDidMount() {
    SR().reveal(this.about, srConfig());
  }

  render() {
    return <AboutContainer id="about" ref={ el => (this.about = el) }>
      <Heading>About Me</Heading>
      <FlexContainer>
        <ContentContainer>
          <Description />
          <SkillsContainer>
          </SkillsContainer>
        </ContentContainer>
        <PicContainer>
          <AvatarContainer>
            <Avatar src={avatar}/>
          </AvatarContainer>
        </PicContainer>
      </FlexContainer>
    </AboutContainer>
  }
}
