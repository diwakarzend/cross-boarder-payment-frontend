import { actionTypes } from "../actions/Login";
import { getObjectValueIfEmpty, clone, isEmpty } from "../utils/common";
import {
  isAuthenticated,
  saveAuthToken,
  clearAuthToken,
} from "../utils/common";

const initialState = {
  isLoggedIn: false,
  isAuthenticated: false,
  loginInfo: "",
  userData: null,
  userWallet: null,
  isWalletLoading: false,
};

export default (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case actionTypes.FETCH_USER_DETAILS_SUCCESS:
      if (action.response.success == true && action.response.data) {
        changes.userData = action.response.data;
      }
      break;

    case actionTypes.FETCH_USER_WALLET_SUCCESS:
      if (action.response.success == true && action.response.data) {
        changes.userWallet = action.response.data;
      }
      break;

    case actionTypes.LOGIN_RESET_STORE:
      //  console.log("isAuthenticated", typeof isAuthenticated);
      changes = {
        ...initialState,
        // isAuthenticated: isAuthenticated(),
      };
      break;

    case actionTypes.LOGIN_REQUEST_INIT:
      changes = {
        isLoggedIn: false,

        userData: null,
      };
      break;

    case actionTypes.FETCHING_WALLET:
      changes = {
        isWalletLoading: true,
      };
      break;

    case actionTypes.FETCHED_WALLET:
      changes = {
        isWalletLoading: false,
      };
      break;

    case actionTypes.LOGIN_REQUEST_SUCCESS:
      const { payload } = action;
      changes = {
        loginInfo: payload,
        isLoggedIn: isAuthenticated(payload),
        isAuthenticated: isAuthenticated(payload),
      };

      break;

    case actionTypes.UPDATE_LOGIN_STATUS:
      changes = {
        isLoggedIn: action.loggedinStatus,
      };

      break;

    case actionTypes.LOGIN_REQUEST_FAILED:
      changes = {
        loginInfo: action.payload,
      };
      break;

    case actionTypes.LOGOUT_REQUEST:
      clearAuthToken();
      changes = {
        isAuthenticated: false,
        userData: null,
      };
      break;

    default:
      changes = {};
      break;
  }

  return clone(state, changes);
};
