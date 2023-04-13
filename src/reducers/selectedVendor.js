import { clone } from "../utils/common";

const initialState = {
  data: null,
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case "SET_SELECTED_VENDOR":
      changes = {
        data: action.payload,
      };
      break;

    default:
      changes = {};
      break;
  }

  return clone(state, changes);
};
