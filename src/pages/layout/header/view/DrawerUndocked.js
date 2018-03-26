import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Drawer from "material-ui/Drawer";
import { MenuItem } from "material-ui/Menu";
import Actions from "../../../../common/actions";
import routers from "../../../../constants/Routers";
import { navSwitch } from "../../../../common/util";
import { withRouter } from "react-router";

const DrawerUndocked = props => {
  const handleClose = event => {
    navSwitch(props, routers, event);
  };
  return (
    <div>
      <Drawer
        docked={false}
        width={200}
        open={props.menu.open}
        onRequestChange={handleClose}
      >
        <a
          style={{ textDecoration: "none" }}
          href="/list"
          onClick={handleClose}
        >
          <MenuItem>Menu Item</MenuItem>
        </a>
        <a
          style={{ textDecoration: "none" }}
          href="/links"
          onClick={handleClose}
        >
          <MenuItem>Menu Item 2</MenuItem>
        </a>
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => state.commonState;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DrawerUndocked)
);
