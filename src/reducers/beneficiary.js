import { actionTypes } from "../actions/beneficiary";
import { clone } from "../utils/common";

const initialState = {
  items: "",
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case actionTypes.FETCH_BENEFICIARY_SUCCESS:
      changes = {
        ...state,
        items: action.payload,
      };
      break;

    case actionTypes.FETCH_BENEFICIARY_FAILURE:
      changes = {
        ...state,
        items: action.payload,
      };
      break;

    default:
      changes = { ...state };
      break;
  }

  return clone(state, changes);
};
