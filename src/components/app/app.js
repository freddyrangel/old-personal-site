import React                              from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled                             from 'styled-components';
import Layout                             from 'components/layout';
import Hero                               from 'components/hero';
import About                              from 'components/about';
import Career                             from 'components/career';
import { mixins, Main }                   from 'styles';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

function FullLayout(props) {
  return <Layout { ...props }>
    <MainContainer { ...props }>
      <Hero { ...props }/>
      <About { ...props }/>
      <Career { ...props }/>
    </MainContainer>
  </Layout>
}

export default function App() {
  return <Router>
    <Route path='/' component={ FullLayout }>
    </Route>
  </Router>;
}
