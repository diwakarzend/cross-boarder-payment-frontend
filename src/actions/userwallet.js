import Request from "../utils/Request";
import urls from "../utils/urls";

export const actionTypes = {
  FETCH_FUND_REQUESTS_SUCCESS: "FETCH_FUND_REQUESTS_SUCCESS",
  FETCH_FUND_REQUESTS_FAILURE: "FETCH_FUND_REQUESTS_FAILURE",
  FETCHING_FUND_REQUESTS: "FETCHING_FUND_REQUESTS",
  FETCHED_FUND_REQUESTS: "FETCHED_FUND_REQUESTS",
};

export function fetchFundRequestsSuccess(data) {
  return {
    type: actionTypes.FETCH_FUND_REQUESTS_SUCCESS,
    payload: data,
  };
}

export function fetchFundRequestsFailure(error) {
  return {
    type: actionTypes.FETCH_FUND_REQUESTS_FAILURE,
  };
}

export function fetchingFundRequest() {
  return {
    type: actionTypes.FETCHING_FUND_REQUESTS,
  };
}

export function fetchedFundRequest() {
  return {
    type: actionTypes.FETCHED_FUND_REQUESTS,
  };
}

export function fetchFundRequests(userRole, requestStatus) {
  let apiPath = urls.Wallet.FETCH_FUND_REQUEST;

  if (userRole == "PTM_VENDOR") {
    apiPath =
      urls.Wallet.FUND_REQUEST + `?status=${requestStatus || "INITIATED"}`;
  }

  return (dispatch) => {
    const successFn = (data, headers) => {
      dispatch(fetchFundRequestsSuccess(data));
      setTimeout(() => {
        dispatch(fetchedFundRequest());
      }, 1000);
    };

    const errorFn = (error) => {
      dispatch(fetchFundRequestsFailure(error));
    };
    dispatch(fetchingFundRequest());
    const api = new Request(dispatch, successFn, errorFn, false);
    return api.get(`${urls.login.BASE_URL}${apiPath}`);
  };
}
