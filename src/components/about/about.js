import React, { Component }         from 'react';
import SR                           from 'scrollreveal';
import styled                       from 'styled-components';
import PT                           from 'prop-types';
import { colors, fontSizes, fonts } from 'styles/theme';
import { srConfig }                 from 'utils';
import { Section, Heading }         from 'styles';

const AboutContainer = styled(Section)`
  position: relative;
`;

export default class About extends Component {
  componentDidMount() {
    SR().reveal(this.about, srConfig());
  }

  render() {
    return <AboutContainer id="about" ref={ el => (this.about = el) }>
      <Heading>Example Title</Heading>
    </AboutContainer>
  }
}
