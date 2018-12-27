import React                    from 'react';
import styled                   from 'styled-components';
import { media, mixins, theme } from 'styles';

const { colors, fonts, fontSizes } = theme;

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

export default function Tabs({ careerData = [], activeTabId, handleClick, isActive }) {

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

  return <TabsContainer>
    <TabItems role="tabitems">
      { tabItems }
    </TabItems>
    <Highlighter activeTabId={ activeTabId } />
  </TabsContainer>;
}
