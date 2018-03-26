import * as React from "react";
import "../common/static/icomoon/style.css";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { blue500, grey600 } from "material-ui/colors";
// import * as injectTapEventPlugin from "react-tap-event-plugin";
// injectTapEventPlugin();

const muiTheme = createMuiTheme({
  palette: {
    primary1Color: blue500
  },
  appBar: {
    textColor: grey600
  }
});

const MyUIProvider = props => {
  return (
    <MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>
  );
};

export default MyUIProvider;
