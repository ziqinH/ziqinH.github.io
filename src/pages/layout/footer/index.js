import * as React from "react";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Actions from "../../../common/actions";
import routers from "../../../constants/Routers";
import FontIcon from "material-ui/Icon";
import { CloudDownload, LocationOn } from "material-ui-icons";
const homeIcon = <FontIcon className="icon-home" />;
const cloudIcon = <CloudDownload />;
const nearbyIcon = <LocationOn />;

class Footer extends React.Component {
  routers = routers;
  select = index => {
    this.props.actions.setBottomNavState({ selectedIndex: index });
    this.props.history.push(this.routers[index]);
  };
  componentWillMount() {
    const selectedIndex = this.routers.indexOf(
      this.props.history.location.pathname
    );
    this.props.actions.setBottomNavState({ selectedIndex: selectedIndex });
  }
  render() {
    const selectedIndex = this.props.bottomNav.selectedIndex;
    return (
      <footer
        style={{
          position: "fixed",
          boxShadow: "0px -3px 4px -2px rgba(0, 0, 0, 0.12)",
          bottom: 0,
          zIndex: 1
        }}
      >
        <BottomNavigation selectedIndex={selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Download"
            icon={cloudIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </footer>
    );
  }
}

const mapStateToProps = state => state.commonState;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
