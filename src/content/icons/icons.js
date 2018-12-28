import React    from 'react';
import SVG      from 'react-inlinesvg';
import external from './external.svg';
import folder   from './folder.svg';
import github   from './github.svg';
import linkedin from './linkedin.svg';
import logo     from './logo.svg';
import twitter  from './twitter.svg';

const SVGWrapper   = (svg) => <SVG src={svg}/>;
const IconExternal = SVGWrapper(external);
const IconFolder   = SVGWrapper(folder);
const IconGithub   = SVGWrapper(github);
const IconLinkedin = SVGWrapper(linkedin);
const IconLogo     = SVGWrapper(logo);
const IconTwitter  = SVGWrapper(twitter);

export {
  IconExternal,
  IconGithub,
  IconFolder,
  IconLinkedin,
  IconLogo,
  IconTwitter
};
