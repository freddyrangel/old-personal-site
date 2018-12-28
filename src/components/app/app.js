import React                              from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled                             from 'styled-components';
import Layout                             from 'components/layout';
import Hero                               from 'components/hero';
import About                              from 'components/about';
import Career                             from 'components/career';
import Featured                           from 'components/featured';
import data                               from 'content/site-data';
import { mixins, Main }                   from 'styles';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

function FullLayout(props) {
  const appProps = Object.assign({}, props, { data });
  return <Layout { ...appProps }>
    <MainContainer { ...appProps }>
      <Hero { ...appProps }/>
      <About { ...appProps }/>
      <Career { ...appProps }/>
      <Featured { ...appProps }/>
    </MainContainer>
  </Layout>
}

export default function App() {
  return <Router>
    <Route path='/' component={ FullLayout }/>
  </Router>;
}
