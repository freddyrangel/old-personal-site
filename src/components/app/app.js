import React            from 'react';
import styled           from 'styled-components';
import Layout           from 'components/layout';
import About            from 'components/about';
import Career           from 'components/career';
import { mixins, Main } from 'styles';

const MainContainer = styled(Main)`
    ${mixins.sidePadding};
    counter-reset: section;
`;

export default function App() {
  return <Layout>
    <MainContainer>
      <About />
      <Career />
    </MainContainer>
  </Layout>;
}
