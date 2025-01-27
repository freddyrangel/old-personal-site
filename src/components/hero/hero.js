import React, { Component }               from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled                             from 'styled-components';
import { theme, mixins, media, Section }  from 'styles';

const { colors, fontSizes, fonts } = theme;

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const Hi = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`;
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Subtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  font-size: ${fontSizes.smallish};
  margin-top: 50px;
`;

class Hero extends Component {

  state = {
    isMounted: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 1000);
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  render() {
    const { data } = this.props;
    const { isMounted } = this.state;
    const { email, hero: { subtitle, description } } = data;

    const one = () => <Hi style={{ transitionDelay: '100ms' }}>Hi, my name is</Hi>;
    const two = () => <Name style={{ transitionDelay: '200ms' }}>Freddy Rangel.</Name>;
    const three = () => (
      <Subtitle style={{ transitionDelay: '300ms' }}>{ subtitle }</Subtitle>
    );
    const four = () => (
      <Blurb style={{ transitionDelay: '400ms' }}>
        <p>{ description }</p>
      </Blurb>
    );
    const five = () => (
      <div style={{ transitionDelay: '500ms' }}>
        <EmailLink href={`mailto:${email}`}>Get In Touch</EmailLink>
      </div>
    );

    const items = [one, two, three, four, five];

    return (
      <HeroContainer>
        <TransitionGroup>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                {item}
              </CSSTransition>
            ))}
        </TransitionGroup>
      </HeroContainer>
    );
  }
}

export default Hero;
