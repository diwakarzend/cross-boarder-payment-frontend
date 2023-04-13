import Request from "../utils/Request";
import urls from "../utils/urls";

export const actionTypes = {
  FETCH_BENEFICIARY_SUCCESS: "FETCH_BENEFICIARY_SUCCESS",
  FETCH_BENEFICIARY_FAILURE: "FETCH_BENEFICIARY_FAILURE",
};

export function fetchBeneficiarySuccess(data) {
  return {
    type: actionTypes.FETCH_BENEFICIARY_SUCCESS,
    payload: data,
  };
}

export function fetchBeneficiaryFailure(error) {
  return {
    type: actionTypes.FETCH_BENEFICIARY_FAILURE,
  };
}

export function fetchBeneficiary() {
  let apiPath = urls.User.GET_BENEFICIARY;

  return (dispatch) => {
    const successFn = (data) => {
      dispatch(fetchBeneficiarySuccess(data));
    };

    const errorFn = (error) => {
      dispatch(fetchBeneficiaryFailure(error));
    };

    const api = new Request(dispatch, successFn, errorFn, false);
    return api.get(`${urls.login.BASE_URL}${apiPath}`);
  };
}
