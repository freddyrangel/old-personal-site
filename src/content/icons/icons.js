import React    from 'react';
import SVG      from 'react-inlinesvg';
import external from './external.svg';
import folder   from './folder.svg';
import github   from './github.svg';
import logo     from './logo.svg';

const SVGWrapper = (svg) => <SVG src={svg}/>

const IconExternal = SVGWrapper(external);
const IconFolder = SVGWrapper(folder);
const IconGithub = SVGWrapper(github);
const IconLogo = SVGWrapper(logo);

export {
  IconExternal,
  IconGithub,
  IconFolder,
  IconLogo
};
