import * as React from "react";
// import "../common/static/icomoon/style.css";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "material-ui/styles";
import CssBaseline from "material-ui/CssBaseline";
import * as colors from "material-ui/colors";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const full_screen = {
  height: "100%",
  width: "100%"
};

const styles = {
  "@global": {
    html: full_screen,
    body: full_screen
  }
};

const MyUIProvider = props => {
  const { color } = props.primary;
  const muiTheme = createMuiTheme({
    palette: {
      primary: {
        light: colors[color][300],
        main: colors[color][500],
        dark: colors[color][700]
      },
      contrastThreshold: 3,
      tonalOffset: 0.2
    }
  });
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};

const mapStateToProps = state => state.commonState;

export default connect(mapStateToProps)(withStyles(styles)(MyUIProvider));
