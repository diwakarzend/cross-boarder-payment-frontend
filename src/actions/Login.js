import Request from "../utils/Request";
import urls from "../utils/urls";
export const actionTypes = {
  LOGIN_RESET_STORE: "LOGIN_RESET_STORE",
  LOGIN_REQUEST_INIT: "LOGIN_REQUEST_INIT",
  LOGIN_REQUEST_SUCCESS: "LOGIN_REQUEST_SUCCESS",
  LOGIN_REQUEST_FAILED: "LOGIN_REQUEST_FAILED",
  LOGIN_OTP_VALIDATION_FAILED: "LOGIN_OTP_VALIDATION_FAILED",
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGIN_OTP_RESEND_FAILED: "LOGIN_OTP_RESEND_FAILED",
  LOGIN_OTP_VALIDATION_INIT: "LOGIN_OTP_VALIDATION_INIT",
  LOGIN_OTP_VALIDATION_SUCCESS: "LOGIN_OTP_VALIDATION_SUCCESS",
  LOGIN_OTP_RESEND_INIT: "LOGIN_OTP_RESEND_INIT",
  LOGIN_OTP_RESEND_SUCCESS: "LOGIN_OTP_RESEND_SUCCESS",
  FETCH_USER_DETAILS_SUCCESS: "FETCH_USER_DETAILS_SUCCESS",
  FETCH_USER_WALLET_SUCCESS: "FETCH_USER_WALLET_SUCCESS",
  FETCHING_WALLET: "FETCHING_WALLET",
  FETCHED_WALLET: "FETCHED_WALLET",
  UPDATE_LOGIN_STATUS: "UPDATE_LOGIN_STATUS",
};

export function loginResetStore() {
  return {
    type: actionTypes.LOGIN_RESET_STORE,
  };
}

export function loginInit() {
  return {
    type: actionTypes.LOGIN_REQUEST_INIT,
  };
}

export function loginSuccessful(data, headers) {
  return {
    type: actionTypes.LOGIN_REQUEST_SUCCESS,
    payload: {
      receivedAt: Date.now(),
      data,
      headers,
    },
  };
}

export function loginFailed(error) {
  return {
    type: actionTypes.LOGIN_REQUEST_FAILED,
  };
}

export function loginRequest(params) {
  return (dispatch) => {
    const successFn = (data, headers) => {
      dispatch(loginSuccessful(data, headers));
    };

    const errorFn = (error) => {
      dispatch(loginFailed(error));
    };

    dispatch(loginInit());

    const api = new Request(dispatch, successFn, errorFn, false);
    return api.post(urls.login.BASE_URL + urls.login.LOGIN_REQUEST, params);
  };
}

/*
export function loginOtpValidationInit() {
  return {
    type: actionTypes.LOGIN_OTP_VALIDATION_INIT,
  };
}

export function loginOtpValidationSuccessful(data, headers) {
  return {
    type: actionTypes.LOGIN_OTP_VALIDATION_SUCCESS,
    payload: {
      receivedAt: Date.now(),
      data,
      headers,
    },
  };
}

export function loginOtpValidationFailed(error) {
  return {
    type: actionTypes.LOGIN_OTP_VALIDATION_FAILED,
  };
}

export function loginOtpValidationRequest(params) {
  return (dispatch) => {
    const successFn = (data, headers) => {
      dispatch(loginOtpValidationSuccessful(data, headers));
    };

    const errorFn = (error) => {
      dispatch(loginOtpValidationFailed(error));
    };

    dispatch(loginOtpValidationInit());

    const api = new Request(dispatch, successFn, errorFn, false);
    return api.post(urls.login.BASE_URL + urls.login.OTP_VALIDATION, params);
  };
}

 
 export function loginOtpResendInit() {
  return {
    type: actionTypes.LOGIN_OTP_RESEND_INIT,
  };
}

export function loginOtpResendSuccessful(data) {
  return {
    type: actionTypes.LOGIN_OTP_RESEND_SUCCESS,
    payload: {
      receivedAt: Date.now(),
      data,
    },
  };
}

export function loginOtpResendFailed(error) {
  return {
    type: actionTypes.LOGIN_OTP_RESEND_FAILED,
  };
}

export function loginOtpResendRequest(params) {
  return (dispatch) => {
    const successFn = (data, headers) => {
      dispatch(loginOtpResendSuccessful(data));
    };

    const errorFn = (error) => {
      dispatch(loginOtpResendFailed(error));
    };

    dispatch(loginOtpResendInit());

    const api = new Request(dispatch, successFn, errorFn, false);
    return api.post(urls.login.BASE_URL + urls.login.LOGIN_OTP_RESEND, params);
  };
} */

export function logoutUser() {
  return {
    type: actionTypes.LOGOUT_REQUEST,
  };
}

function fetchUserDetailsSuccess(response) {
  return {
    type: actionTypes.FETCH_USER_DETAILS_SUCCESS,
    response: response,
  };
}

function fetchUserDetails(token) {
  return (dispatch) => {
    const successFn = (response) => {
      dispatch(fetchUserDetailsSuccess(response));
    };
    const errorFn = (error) => {};
    const api = new Request(dispatch, successFn, errorFn);
    // const params = { headers: { Authorization: token } };
    return api.get(urls.login.BASE_URL + urls.login.GET_PROFILE);
  };
}

function shouldFetchUserDetails(state) {
  const { login } = state;
  if (login && !login.userData) {
    return true;
  }
  return false;
}

function fetchUserWalletSuccess(response) {
  return {
    type: actionTypes.FETCH_USER_WALLET_SUCCESS,
    response: response,
  };
}

export function fetchingUserWallet() {
  return {
    type: actionTypes.FETCHING_WALLET,
  };
}

export function fetchedUserWallet() {
  return {
    type: actionTypes.FETCHED_WALLET,
  };
}

export function fetchUserWallet() {
  return (dispatch) => {
    const successFn = (response) => {
      dispatch(fetchUserWalletSuccess(response));
      setTimeout(() => {
        dispatch(fetchedUserWallet());
      }, 1000);
    };
    const errorFn = (error) => {};
    dispatch(fetchingUserWallet());
    const api = new Request(dispatch, successFn, errorFn);
    // const params = { headers: { Authorization: token } };
    return api.get(urls.login.BASE_URL + urls.login.GET_WALLET);
  };
}

function shouldFetchWalletData(state) {
  const { login } = state;
  if (login && !login.userWallet) {
    return true;
  }
  return false;
}

export function fetchUserWalletIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchWalletData(getState())) {
      return dispatch(fetchUserWallet());
    }
    return Promise.resolve([]);
  };
}

export function fetchUserDetailsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchUserDetails(getState())) {
      return dispatch(fetchUserDetails());
    }
    return Promise.resolve([]);
  };
}

export function updateLoginStatus(loggedinStatus) {
  return {
    type: actionTypes.UPDATE_LOGIN_STATUS,
    loggedinStatus: loggedinStatus,
  };
}
