import axios from "axios";
import moment from "moment";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  clearAuthToken,
  getObjectValue,
  httpStatusCodes,
} from "../utils/common";
import { getAuthToken, isAuthenticated } from "./common.js";
import { loginResetStore, logoutUser } from "../actions/Login";

class Request {
  constructor(dispatch, successFn, errorFn, authorize = true) {
    this.authorize = authorize;
    this.successFn = typeof successFn === "function" ? successFn : () => {};
    this.errorFn = typeof errorFn === "function" ? errorFn : () => {};
    this.dispatch = typeof dispatch === "function" ? dispatch : () => {};
  }

  static get baseUrl() {
    return "";
  }

  /**
   * GET axios instance and do things that are common for every request
   */
  instance() {
    const headers = {};

    if (this.authorize) {
      // headers.Authorization = getAuthToken();
    }

    const instance = axios.create({
      baseURL: Request.baseUrl,
      //   timeout: 1000,
      headers,
    });

    // Response Interceptor
    instance.interceptors.response.use(undefined, (error) => {
      const status = getObjectValue(error, "response.status", null);
      // if (status === httpStatusCodes.UNAUTHORIZED) {
      //   // Unauthorized User
      //   this.dispatch(logoutUser());
      // }

      return Promise.reject(error);
    });

    return instance;
  }

  /**
   * Make GET Requests
   * @param {string} url
   * @param {object} params
   */
  get(url, params = {}) {
    if(!getAuthToken()) return;
    const decodedToken = jwtDecode(getAuthToken());
    const isTokenExired = moment.unix(decodedToken.exp) < moment();
    if (this.authorize && isTokenExired) {
      // const dispatch = useDispatch();
      // const history = useHistory();
      clearAuthToken();
      window.location.href = "/";
      // dispatch(loginResetStore());
      // history.push("/");
      return this.errorFn([], {}, httpStatusCodes.BAD_REQUEST);
    }

    const options = {
      headers: {
        Authorization: getAuthToken(),
        "api-Authorization": getAuthToken("api-Authorization"),
        "Access-Control-Allow-Origin": "*",
      },
    };

    return axios
      .get(url, options)
      .then((response) => {
        const data = getObjectValue(response, "data", null);
        const headers = getObjectValue(response, "headers", null);
        const isSuccess = true;
        this.successFn(data, headers, isSuccess);
        return response;
      })
      .catch((error) => {
        const data = getObjectValue(error, "response.data", null);
        const headers = getObjectValue(error, "response.headers", null);
        const status = getObjectValue(error, "response.status", null);
        if(status === 401) {
          clearAuthToken();
          window.location.href = "/";
        }
        this.errorFn(data, headers, status);
        return error;
      });
  }

  /**
   * Make POST Requests
   * @param {string} url
   * @param {object} params
   */
  post(url, params) {
    if(!url.includes('/api/authenticate')){
      if(!getAuthToken()) return;
      const decodedToken = jwtDecode(getAuthToken());
      const isTokenExired = moment.unix(decodedToken.exp) < moment();
      if (this.authorize && isTokenExired) {
        // const dispatch = useDispatch();
        // const history = useHistory();
        clearAuthToken();
        window.location.href = "/";
        // dispatch(loginResetStore());
        // history.push("/");
        return this.errorFn([], {}, httpStatusCodes.BAD_REQUEST);
      }
    }
    

    // this.instance.defaults.headers["Authorization"] = "sssssssssssssssss";
    const options = {
      headers: {
        Authorization: getAuthToken(),
        "api-Authorization": getAuthToken("api-Authorization"),
      },
    };
    return axios
      .post(url, params, options)
      .then((response) => {
        const data = getObjectValue(response, "data", null);
        const headers = getObjectValue(response, "headers", null);
        const isSuccess = true;
        this.successFn(data, headers, isSuccess);
        return response;
      })
      .catch((error) => {
        const data = getObjectValue(error, "response.data", null);
        const headers = getObjectValue(error, "response.headers", null);
        const status = getObjectValue(error, "response.status", null);
        if(status === 401) {
          clearAuthToken();
          window.location.href = "/";
        }
        this.errorFn(data, headers, status);
        return error;
      });
  }

  put(url, params) {
    const options = {
      headers: {
        Authorization: getAuthToken(),
        "api-Authorization": getAuthToken("api-Authorization"),
      },
    };
    return axios
      .put(url, params, options)
      .then((response) => {
        const data = getObjectValue(response, "data", null);
        this.successFn(data);
        return response;
      })
      .catch((error) => {
        const data = getObjectValue(response, "data", null);

        this.errorFn(data);
        return error;
      });
  }


  delete(url, params = {}) {
    if(!getAuthToken()) return;
    const decodedToken = jwtDecode(getAuthToken());
    const isTokenExired = moment.unix(decodedToken.exp) < moment();
    if (this.authorize && isTokenExired) {
      // const dispatch = useDispatch();
      // const history = useHistory();
      clearAuthToken();
      window.location.href = "/";
      // dispatch(loginResetStore());
      // history.push("/");
      return this.errorFn([], {}, httpStatusCodes.BAD_REQUEST);
    }

    const options = {
      headers: {
        Authorization: getAuthToken(),
        "api-Authorization": getAuthToken("api-Authorization"),
        "Access-Control-Allow-Origin": "*",
      },
    };

    return axios
      .delete(url, options)
      .then((response) => {
        const data = getObjectValue(response, "data", null);
        const headers = getObjectValue(response, "headers", null);
        const isSuccess = true;
        this.successFn(data, headers, isSuccess);
        return response;
      })
      .catch((error) => {
        const data = getObjectValue(error, "response.data", null);
        const headers = getObjectValue(error, "response.headers", null);
        const status = getObjectValue(error, "response.status", null);
        if(status === 401) {
          clearAuthToken();
          window.location.href = "/";
        }
        this.errorFn(data, headers, status);
        return error;
      });
  }
}

export default Request;
