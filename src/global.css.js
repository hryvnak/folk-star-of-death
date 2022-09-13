import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  ::selection { 
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.white};
  }
  body{
    height: auto;
    background-color: ${theme.palette.light.light1};
    line-height: ${theme.lineHeight};
    margin: 0px;
    font-family: ${theme.font.family1};
    font-size: ${theme.font.size.body};
    font-weight: ${theme.font.weight.normal};
    color: ${theme.palette.dark.dark2};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  section{
    display: block;
    width: 100%;
    height: auto;
    background: none;
    padding: calc(30px + 2vw) 0px;
    box-sizing: border-box;
    &:first-child{
      margin-top: 70px;
    }
    @media screen and (min-width: ${theme.screenSize.fullSize}) {
      padding: 70px 0px;
    }
  }
  a{
    color: ${theme.palette.primary.main};
    outline: none;
    text-decoration: underline;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus{
      text-decoration: none;
    }
  }
  hr{
    display: block;
    width: 100%;
    height: 0px;
    background: none;
    border: 0px;
    border-bottom: 1px ${theme.palette.light.light2} solid;
    margin: 20px 0px 20px 0px;
  }
  p{
    display: block;
    width: auto;
    height: auto;
    line-height: ${theme.lineHeight};
    background: none;
    margin: 0px 0px 15px 0px;
    font-size: ${theme.font.size.body};
    font-weight: ${theme.font.weight.normal};
    color: ${theme.palette.dark.dark2};
    &+p{
      margin: 15px 0px 15px 0px;
    }
    &:last-child{
      margin-bottom: 0px;
    }
  }
  h1, h2, h3, h4, h5, h6{
    display: block;
    width: auto;
    height: auto;
    line-height: 1.3;
    font-family: ${theme.font.family2};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.palette.dark.dark3};
    box-sizing: border-box;
  }
  h1{font-size: calc(${theme.font.size.h1});}
  h2{font-size: ${theme.font.size.h2};}
  h3{font-size: ${theme.font.size.h3};}
  h4{font-size: ${theme.font.size.h4};}
  h5{font-size: ${theme.font.size.h5};}
  h6{font-size: ${theme.font.size.h6};}
  img{
    display: block;
    max-width: 100%;
    height: auto;
  }
`;