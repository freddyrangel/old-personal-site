import React, { Component }                       from 'react';
import ScrollReveal                               from 'scrollreveal';
import { srConfig}                                from 'utils';
import styled                                     from 'styled-components';
import { theme, mixins, media, Section, Heading } from 'styles';

const { colors, fontSizes, fonts } = theme;

const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const GreenHeading = styled(Heading)`
  display: block;
  color: ${colors.green};
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: ${fontSizes.small};`};
  &:before {
    bottom: 0;
    font-size: ${fontSizes.small};
    ${media.desktop`font-size: ${fontSizes.smallish};`};
  }
  &:after {
    display: none;
  }
`;
const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

class Contact extends Component {
  componentDidMount() {
    ScrollReveal().reveal(this.contact, srConfig());
  }

  render() {
    const { data: { email } } = this.props;

    return (
      <ContactContainer id="contact" ref={el => (this.contact = el)}>
        <GreenHeading>What's Next?</GreenHeading>

        <Title>Get In Touch</Title>

        <EmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
          Say Hello
        </EmailLink>
      </ContactContainer>
    );
  }
}

export default Contact;
