import React, { Component }                       from 'react';
import SR                                         from 'scrollreveal';
import styled                                     from 'styled-components';
import { srConfig }                               from 'utils';
import { Section, Heading, mixins, media, theme } from 'styles';
import avatar                                     from 'content/devweek.jpg'
import Skills                                     from './skills';

const {
  colors, fontSizes, borderRadius, transition, fonts: { SFMono }
} = theme;

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

export default class About extends Component {
  componentDidMount() {
    SR().reveal(this.about, srConfig());
  }

  render() {
    return <AboutContainer id="about" ref={ el => (this.about = el) }>
      <Heading>About Me</Heading>
      <FlexContainer>
        <ContentContainer>
          <p>{ this.props.data.about.description }</p>
          <Skills />
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
