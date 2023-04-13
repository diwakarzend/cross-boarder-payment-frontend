import { actionTypes } from "../actions/userwallet";
import { clone } from "../utils/common";

const initialState = {
  fundRequest: "",
  fundRequestLoading: false,
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case actionTypes.FETCH_FUND_REQUESTS_SUCCESS:
      changes = {
        ...state,
        fundRequest: action.payload,
      };
      break;

    case actionTypes.FETCH_FUND_REQUESTS_FAILURE:
      changes = {
        ...state,
        fundRequest: action.payload,
      };
      break;
    
    case actionTypes.FETCHING_FUND_REQUESTS:
      changes = {
        fundRequestLoading: true
      };
      break;  

    case actionTypes.FETCHED_FUND_REQUESTS:
      changes = {
        fundRequestLoading: false
      };
      break;     

    default:
      changes = { ...state };
      break;
  }

  return clone(state, changes);
};
