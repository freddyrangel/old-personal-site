import React from 'react';
import logo  from './logo.svg';
import SVG   from 'react-inlinesvg';

const SVGWrapper = (svg) => <SVG src={svg}/>

const IconLogo = SVGWrapper(logo);

export {
  IconLogo
};
