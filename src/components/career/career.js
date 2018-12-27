import React, { Component }                       from 'react';
import styled                                     from 'styled-components';
import SR                                         from 'scrollreveal';
import { Heading, Section, media, mixins, theme } from 'styles';
import { srConfig }                               from 'utils';
import Tabs                                       from './tabs';

const { colors, fonts, fontSizes } = theme;

const careerData = [
  {
    company: 'Science Exchange',
    fromTo: 'March 2017 - February 2018',
    title: 'Senior Full Stack Software Engineer',
    accomplishments: [
      'Optimized search experience by forming a Marketplace and Discovery Team consisting of key stakeholders from different departments',
      'Improved maintainability of front-end by migrating from jQuery & Ember to test- driven React',
      'Implemented JavaScript error reporting which identified critical issues for our enterprise clients',
      'Improved web accessibility (a11y) by instituting a thorough audit process',
      'Advanced engineering standards by compiling an engineering handbook and streamlining on-call processes',
      'Conducted team workshops on JavaScript topics'
    ]
  },
  {
    company: 'HelloSign',
    fromTo: 'June 2015 - March 2017',
    title: 'Senior Front End Engineer',
    accomplishments: [
    ]
  },
  {
    company: 'Velocis',
    fromTo: 'August 2014 - June 2015',
    title: 'Software Developer',
    accomplishments: [
    ]
  },
  {
    company: 'TechLabs',
    fromTo: 'December 2013 - July 2014',
    title: 'Software Developer',
    accomplishments: [
    ]
  }
];

const CareerContainer = styled(Section)`
  position: relative;
  max-width: 700px;
`;

const ContentContainer = styled.div`
  position: relative;
  padding-top: 14px;
  padding-left: 30px;
  flex-grow: 1;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
`;

const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  z-index: ${({ isActive }) => isActive ? 2 : -1};
  position: ${({ isActive }) => isActive ? 'relative' : 'absolute'};
  visibility: ${({ isActive }) => isActive ? 'visible' : 'hidden'};
  transition: ${theme.transition};
  transition-duration: ${({ isActive }) => isActive ? '0.5s' : '0s'};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.large};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 5px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors.green};
        line-height: ${fontSizes.xlarge};
      }
    }
  }
  a {
    ${mixins.inlineLink};
  }
`;

const JobTitle = styled.h4`
  color: ${colors.lightestSlate};
  font-size: ${fontSizes.xxlarge};
  font-weight: 500;
  margin-bottom: 5px;
`;

const Company = styled.span`
  color: ${colors.green};
`;

const JobDetails = styled.h5`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  letter-spacing: 0.5px;
  color: ${colors.lightSlate};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;

export default class Career extends Component {

  state = {
    activeTabId: 0
  };

  componentDidMount() {
    SR().reveal(this.career, srConfig());
  }

  isActive = id => {
    console.log('this is the current active tab', this.state.activeTabId);
    console.log('this is the current tab', id);
    return this.state.activeTabId === id;
  };

  setActiveTab = (activeTabId) => this.setState({ activeTabId });

  render() {
    const content = careerData && careerData.map((data, i) => {
      const tabContentProps = {
        key: i,
        isActive: this.isActive(i),
        id: `job${i}`,
        role: 'tabpanel',
        tabIndex: 0,
        ariaLabelledby: `job${i}`,
        ariaHidden: !this.isActive(i),
      };
      return <TabContent { ...tabContentProps }>
        <JobTitle>
          <span>{data.title}</span>
          <Company>
            &nbsp;@&nbsp;
            <a href={ data.url } target="_blank" rel="nofollo noopener noreferrer">{ data.company }</a>
          </Company>
        </JobTitle>
        <JobDetails><span>{ data.fromTo }</span></JobDetails>
        <ul>
          { data.accomplishments && data.accomplishments.map((accomplishment, i) => <li key={i}>{accomplishment}</li>) }
        </ul>
      </TabContent>;
    });

    return <CareerContainer id="career" ref={el => (this.career = el)}>
      <Heading>Work History</Heading>
      <Tabs { ...this.state } { ...this.props } careerData={ careerData } handleClick={ this.setActiveTab } isActive={ this.isActive }/>
      <ContentContainer>
        { content }
      </ContentContainer>
    </CareerContainer>;
  }
}
