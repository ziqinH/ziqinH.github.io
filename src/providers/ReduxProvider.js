import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "../common/stores";
const store = configureStore();
const ReduxProvider = props => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
