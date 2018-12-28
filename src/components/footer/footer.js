import React                                     from 'react';
import styled                                    from 'styled-components';
import { theme, mixins, media }                  from 'styles';
import { IconGithub, IconLinkedin, IconTwitter } from 'content/icons';

const { colors, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkNavy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
`;
const SocialContainer = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled.p`
  margin: 5px 0 3px;
`;
const GithubLink = styled.a`
  color: ${colors.slate};
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
`;

export default function Footer({ data: { socialMedia = [] } }) {
  const socialMediaList = socialMedia.map(({ name, url }, i) => {
    const socialLinkProps = {
      href: url,
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      "aria-label": name
    };
    const socialMediaImg = {
      'Github': IconGithub,
      'Linkedin': IconLinkedin,
      'Twitter': IconTwitter
    }[name];

    return <li key={ i }>
      <SocialLink { ...socialLinkProps }>{ socialMediaImg }</SocialLink>
    </li>;
  });

  return <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        { socialMediaList }
      </SocialItemList>
    </SocialContainer>
    <Copy>
      <GithubLink
        href="https://github.com/bchiang7/v4"
        target="_blank"
        rel="nofollow noopener noreferrer">
        Freddy Rangel { new Date().getFullYear() }
      </GithubLink>
    </Copy>
  </FooterContainer>;
}
