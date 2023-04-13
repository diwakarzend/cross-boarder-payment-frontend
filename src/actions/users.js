import Request from "../utils/Request";
import urls from "../utils/urls";

export const actionTypes = {
  FETCH_USERS_LIST_SUCCESS: "FETCH_USERS_LIST_SUCCESS",
  FETCH_USERS_LIST_FAILURE: "FETCH_USERS_LIST_FAILURE",
};

export function fetchUsersListSuccess(data) {
  return {
    type: actionTypes.FETCH_USERS_LIST_SUCCESS,
    payload: data,
  };
}

export function fetchUsersListFailure(error) {
  return {
    type: actionTypes.FETCH_USERS_LIST_FAILURE,
  };
}

export function fetchUsersList(params) {
  return (dispatch) => {
    const successFn = (data, headers) => {
      dispatch(fetchUsersListSuccess(data));
    };

    const errorFn = (error) => {
      dispatch(fetchUsersListFailure(error));
    };

    const api = new Request(dispatch, successFn, errorFn, false);
    return api.get(urls.login.BASE_URL + urls.login.GET_API_USERS);
  };
}
