import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
  
const lightTheme = responsiveFontSizes(createMuiTheme({
  spacing: 4,
  typography: {
    fontFamily: [
      'Roboto',
      'Raleway',
      'Open Sans',
    ].join(','),
    h1: {
      fontSize: '5rem',
      fontFamily: 'Raleway',
    },
    h3: {
      fontSize: '2.5rem',
      fontFamily: 'Open Sans',
    },
  },
  palette: {
    background: {
      default: '#009900'//green
    },
    primary: {
      main: '#009900',//green
    },
    secondary:{
      main: '#000000',//black
      icons: '#009900', //white
    },
    text: {
      primary: '#000000',//black
      secondary: '#FFFFFF',//white
    },
  },
}));
  
const darkTheme = responsiveFontSizes(createMuiTheme({
  spacing: 4,
  typography: {
    fontFamily: [
      'Roboto',
      'Raleway',
      'Open Sans',
    ].join(','),
    h1: {
      fontSize: '5rem',
      fontFamily: 'Raleway',
    },
    h3: {
      fontSize: '2.5rem',
      fontFamily: 'Open Sans',
    },
  },
  palette: {
    background: {
      default: '#000000'//black
    },
    primary: {
      main: '#FFFFFF',//white
    },
    secondary:{
      main: '#FFFFFF', //white
      icons: '#FFFFFF', //white
    },
    text: {
      primary: '#FFFFFF',//white
      secondary: '#FFFFFF',//white
    },
  },
}));
  
export default lightTheme ;
export {darkTheme} ;