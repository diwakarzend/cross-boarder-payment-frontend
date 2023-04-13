import Request from "../utils/Request";
import urls from "../utils/urls";
import axios from "axios";
import { getAuthToken, isAuthenticated } from "../utils/common";

export const actionTypes = {
  FETCH_REPORTS_SUCCESS: "FETCH_REPORTS_SUCCESS",
  FETCH_REPORTS_FAILURE: "FETCH_REPORTS_FAILURE",
  FETCH_DASHBOARD_REPORTS_SUCCESS: "FETCH_DASHBOARD_REPORTS_SUCCESS",
  FETCH_DASHBOARD_REPORTS_FAILURE: "FETCH_DASHBOARD_REPORTS_FAILURE",
  FETCH_COMMISION_RANGE_SUCCESS: "FETCH_COMMISION_RANGE_SUCCESS",
};

export function fetchMonthlyReportsSuccess(data) {
  return {
    type: actionTypes.FETCH_DASHBOARD_REPORTS_SUCCESS,
    payload: data,
  };
}

export function fetchMonthlyReportsFailure(error) {
  return {
    type: actionTypes.FETCH_DASHBOARD_REPORTS_FAILURE,
  };
}

export function fetchReportsSuccess(data) {
  return {
    type: actionTypes.FETCH_REPORTS_SUCCESS,
    payload: data,
  };
}

export function fetchReportsFailure(error) {
  return {
    type: actionTypes.FETCH_REPORTS_FAILURE,
  };
}

// export function fetchTransactionReport(params, setPagingData) {
//   const { pageNo } = params;
//   let apiPath = `${urls.login.BASE_URL}${urls.payout.TRANSACTION_REPORT}`;
//   apiPath = pageNo
//     ? apiPath.replace("{pageNo}", pageNo)
//     : apiPath.replace("{pageNo}", 0);

//   return (dispatch) => {
//     const onSuccess = (res) => {
//       dispatch(fetchReportsSuccess(res));
//       setPagingData(res?.data?.data);
//     };

//     const onFail = (error) => {
//       dispatch(fetchReportsFailure(error));
//     };

//     const api = new Request(dispatch, onSuccess, onFail, false);
//     return api.post(apiPath, params);
//   };
// }

function fetchCommisionRangeSuccess(data) {
  return {
    type: actionTypes.FETCH_COMMISION_RANGE_SUCCESS,
    payload: data,
  };
}

export function fetchCommisionRange() {
  return (dispatch) => {
    const onSuccess = (data) => {
      dispatch(fetchCommisionRangeSuccess(data));
    };
    const onFail = (data) => {};

    const api = new Request(dispatch, onSuccess, onFail, false);
    return api.get(`${urls.login.BASE_URL}${urls.payout.COMMISSION_RANGE}`);
  };
}
