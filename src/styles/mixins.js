import { css } from 'styled-components';
import theme from 'styles/theme';
import media from 'styles/media';

const {
  transition, borderRadius,
  fonts: { SFMono },
  fontSizes: { smallish, small },
  colors: { green, transGreen }
} = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${green};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    transition: ${transition};
    cursor: pointer;
    color: ${green};
    &:hover,
    &:active,
    &:focus {
      color: ${green};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${green};
      transition: ${transition};
    }
  `,

  smallButton: css`
    color: ${green};
    background-color: transparent;
    border: 1px solid ${green};
    border-radius: ${borderRadius};
    padding: 12px 17px;
    font-size: ${smallish};
    font-family: ${SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${transition};
    &:hover,
    &:active,
    &:focus {
      background-color: ${transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${green};
    backgroun-color: transparent;
    border: 1px solid ${green};
    border-radius: ${borderRadius};
    padding: 18px 23px;
    font-size: ${small};
    font-family: ${SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px`};
    ${media.tablet`padding: 0 50px`};
    ${media.phablet`padding: 0 25px`};
  `
};

export default mixins;
