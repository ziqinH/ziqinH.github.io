import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Actions from "../../../../common/actions";
import { withStyles } from "material-ui/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Input } from "material-ui";
import { Menu as MenuIcon, MoreVert } from "material-ui-icons";
import Menu, { MenuItem } from "material-ui/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function MainHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            mukeer
          </Typography>
          <Input
            id="search"
            label="Search field"
            type="search"
            disableUnderline
            className={'inputTypeSearch'}
            margin="normal"
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MainHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => state.commonState;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(MainHeader)
);
