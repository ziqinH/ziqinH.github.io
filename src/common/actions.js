import ActionTypes from "./actionTypes";
import { createActions } from "redux-actions";

const defaultAction = payload => payload;

export default createActions({
  [ActionTypes.SET_PRIMARY_COLOR_STATE]: defaultAction,
  [ActionTypes.SET_MENU_STATE]: defaultAction,
  [ActionTypes.SET_BOTTOM_NAV_STATE]: defaultAction
});
