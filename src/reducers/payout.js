import { actionTypes } from "../actions/payout";
import { clone } from "../utils/common";

const initialState = {
  reports: "",
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case actionTypes.FETCH_REPORTS_SUCCESS:
      changes = {
        ...state,
        reports: action.payload,
      };
      break;

    case actionTypes.FETCH_REPORTS_FAILURE:
      changes = {
        reports: action.payload,
      };
      break;

    case actionTypes.FETCH_DASHBOARD_REPORTS_SUCCESS:
      changes = {
        ...action.payload,
      };
      break;

    case actionTypes.FETCH_DASHBOARD_REPORTS_FAILURE:
      changes = {
        ...action.payload,
      };
      break;

    case actionTypes.FETCH_COMMISION_RANGE_SUCCESS:
      changes = {
        commission: action.payload,
      };
      break;

    default:
      changes = { ...state };
      break;
  }

  return clone(state, changes);
};
