// import { grey50 } from 'material-ui/colors';
import { withStyles } from "material-ui/styles";
const styles = {
  html: {
    height: "100%"
    // background: ${grey50};
  },
  body: {
    margin: 0,
    padding: 0
  }
};

export default withStyles(styles);

/* injectGlobal`
	html{
		height: 100%;
		background: ${grey50};
	}
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
`; */
