import * as React from "react";
import "../common/static/icomoon/style.css";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { purple } from "material-ui/colors";
// import * as injectTapEventPlugin from "react-tap-event-plugin";
// injectTapEventPlugin();
// console.log(background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',)
const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      main: purple[500],
      dark: purple[700]
    },
    contrastThreshold:3,
    tonalOffset: 0.2
  }
});

const MyUIProvider = props => {
  return (
    <MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>
  );
};

export default MyUIProvider;
