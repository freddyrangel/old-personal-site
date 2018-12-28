import React                  from 'react';
import PT                     from 'prop-types';
import styled                 from 'styled-components';
import Header                 from 'components/header';
import Social                 from 'components/social';
import Email                  from 'components/email';
import Footer                 from 'components/footer';
import { GlobalStyle, theme } from 'styles';

const { colors, fontSizes, fonts } = theme;

export default function Layout({ children, location, data }) {
  return <div id="root">
    <GlobalStyle />
    <Header location={ location }/>
    { children }
    <Footer data={ data }/>
  </div>;
}
