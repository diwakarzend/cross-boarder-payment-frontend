import { actionTypes } from "../actions/users";
import { clone } from "../utils/common";

const initialState = {
  usersList: "",
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case actionTypes.FETCH_USERS_LIST_SUCCESS:
      changes = {
        usersList: action.payload,
      };
      break;

    default:
      changes = {};
      break;
  }

  return clone(state, changes);
};
