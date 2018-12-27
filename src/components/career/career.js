import React, { Component }                       from 'react';
import styled                                     from 'styled-components';
import SR                                         from 'scrollreveal';
import { Heading, Section, media, mixins, theme } from 'styles';
import { srConfig }                               from 'utils';

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
      'Improved JavaScript runtime performance by a factor of 15',
      'Reduced initial browser load-time from 4.5 seconds to 200 milliseconds',
      'Helped build HelloWorks, a new signature product based on an event-driven architecture',
      'Gave talks and workshops for developer conferences all over the US'
    ]
  },
  {
    company: 'Velocis',
    fromTo: 'August 2014 - June 2015',
    title: 'Software Developer',
    accomplishments: [
      'Refactored large legacy enterprise systems using TDD and increased test coverage from 0 to 85 percent while adding new features',
      'Architected and built backend JSON APIs for web, hybrid, and native applications',
      'Built a social networking application (SkyRise) connecting office tenants into online communities',
      'Taught other developers how to write and maintain test suites'
    ]
  },
  {
    company: 'TechLabs',
    fromTo: 'December 2013 - July 2014',
    title: 'Software Developer',
    accomplishments: [
      'Designed and build a modular medical appointment scheduling app using Ruby on Rails',
      'Extracted major features into reusable components via Rails engines to build an e-commerce platform and a direct sales support application'
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
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${media.thone`display: block;`};
`;

const TabItems = styled.div`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  ${media.thone`
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    overflow-x: scroll;
  `};
`;

const TabItem = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-left: 2px solid ${colors.darkGrey};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${props => (props.isActive ? colors.green : colors.lightGrey)};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors.darkGrey};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: ${colors.lightNavy};
  }
`;

const Highlighter = styled.span`
  display: block;
  background: ${colors.green};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: ${theme.transition};
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0)}px
  );
  ${media.thone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabWidth: 0)}px
    );
  `};
`;

function Tabs({ careerData = [], activeTabId, handleClick, isActive }) {

  const tabItems = careerData.map((data, i) => {
    const isTabActive = isActive(i)
    const tabItemProps = {
      key: i,
      onClick: e => handleClick(i),
      isActive: isTabActive,
      role: 'tab',
      'aria-selected': isTabActive ? 'true' : 'false',
      'aria-controls': `tabs${i}`,
      id: `tabs${i}`,
      tabIndex: isTabActive ? '0' : '-1'
    };

    return <TabItem { ...tabItemProps }>{ data.company }</TabItem>;
  });

  const content = careerData && careerData.map((data, i) => {
    const tabContentProps = {
      key: i,
      isActive: isActive(i),
      id: `job${i}`,
      role: 'tabpanel',
      tabIndex: 0,
      ariaLabelledby: `job${i}`,
      ariaHidden: !isActive(i),
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

  return <TabsContainer>
    <TabItems role="tabitems">
      { tabItems }
      <Highlighter activeTabId={ activeTabId } />
    </TabItems>
    <ContentContainer>
      { content }
    </ContentContainer>
  </TabsContainer>;
}

export default class Career extends Component {

  state = {
    activeTabId: 0
  };

  componentDidMount() {
    SR().reveal(this.career, srConfig());
  }

  isActive = id => this.state.activeTabId === id;

  setActiveTab = (activeTabId) => this.setState({ activeTabId });

  render() {

    return <CareerContainer id="experience" ref={el => (this.career = el)}>
      <Heading>Work History</Heading>
      <Tabs { ...this.state } { ...this.props } careerData={ careerData } handleClick={ this.setActiveTab } isActive={ this.isActive }/>
    </CareerContainer>;
  }
}
