import axios from "axios";
import moment from "moment";
export function timeout(func, time, dispatch) {
  setTimeout(
    function() {
      if (dispatch == null) func();
      else {
        dispatch(func());
      }
    }.bind(this),
    time
  );
}

export function getCurrentDate(formate) {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  if (formate == "dmy") {
    return `${day}-${month}-${year}`;
  }

  return year + "-" + month + "-" + day;
}

export function getDateInFormat(dateInString, dateFormat) {
  if (isEmpty(dateInString)) {
    return null;
  }
  var temp = moment(dateInString)
    .format(dateFormat)
    .split(" ");
  return temp[0];
}

export function getDateFromDateObj(dateObj, dateFormat) {
  let date = moment(dateObj).format(dateFormat);
  return date;
}

export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  var day = result.getDate();
  var month = result.getMonth() + 1;
  var year = result.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  return year + "-" + month + "-" + day;
}

export function diffDays(startDate, endDate) {
  var start = moment(startDate);
  var end = moment(endDate);
  return end.diff(start, "days");
}

export function saveAuthToken(item, value) {
  sessionStorage.setItem(item, `Bearer ${value}`);
  setAuthorizationToken(value);
}

export function getAuthToken(type) {
  return type
    ? sessionStorage.getItem(type)
    : sessionStorage.getItem("Authorization");
}

export function saveUserData(userData) {
  const time = new Date().getTime().toString();
  localStorage.setItem("userData", JSON.stringify(userData));
  localStorage.setItem("userData_time", time);
}

export function getUserData() {
  return JSON.parse(localStorage.getItem("userData"));
}

export function clearAuthToken() {
  sessionStorage.removeItem("Authorization");
  sessionStorage.removeItem("api-Authorization");
  setAuthorizationToken(false);
}

export function isAuthenticated(response) {
  if (response && response.data) {
    if (response.data.id_token && response.data.api_token) {
      saveAuthToken("Authorization", response.data.id_token);
      saveAuthToken("api-Authorization", response.data.api_token);
      return true;
    }
    return false;
  } else if (!isEmpty(getAuthToken())) {
    return true;
  }

  // const isAuthenticated = !isEmpty(getAuthToken());
  // return isAuthenticated;
}

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["token"] = token;
  } else {
    delete axios.defaults.headers.common["token"];
  }
}
export function getHeader(uri) {
  const config = {
    headers: {
      uri: uri,
    },
  };
  return config;
}

export function get(url, cofig) {
  if (!isAuthenticated()) {
    setAuthorizationToken(false);
  }
  return axios.get(url, cofig);
}

export function deleteMethod(url, cofig) {
  if (!isAuthenticated()) {
    setAuthorizationToken(false);
  }
  return axios.delete(url, cofig);
}

export function post(url, data, cofig) {
  if (!isAuthenticated()) {
    setAuthorizationToken(false);
  }
  return axios.post(url, data, cofig);
}
export function put(url, data) {
  if (!isAuthenticated()) {
    setAuthorizationToken(false);
  }
  return axios.put(url, data);
}

//import logger from 'logger';
//const log = logger.createLogger(config.LOG_FILE_PATH);

export function getIP(req) {
  if (req == null) {
    return null;
  }
  return req.headers["x-real-ip"] || req.connection.remoteAddress;
}

export function isEmpty(obj) {
  let isEmpty = false;
  const type = typeof obj;

  isEmpty = isEmpty || !obj;
  isEmpty = isEmpty || type === "undefined"; // if it is undefined
  isEmpty = isEmpty || obj === null; // if it is null
  isEmpty = isEmpty || (type === "string" && obj === ""); // if the string is empty
  isEmpty = isEmpty || obj === false || obj === 0; // if boolean value returns false
  isEmpty = isEmpty || (Array.isArray(obj) && obj.length === 0); // if array is empty
  isEmpty = isEmpty || (type === "object" && Object.keys(obj).length === 0); // if object is empty

  return isEmpty;
}

export function isEmail(value) {
  return value.match(
    /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/
  );
}

// check if value is gstin
export function isGSTIN(value) {
  let val = value.trim();
  return (
    val.match(/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[A-Z\d]{1}[A-Z\d]{1}$/) ||
    val === "XXXXXXXXXXXXXXX"
  );
}

// check if value is pinCode
export function isPinCode(value) {
  return value.match(/^[1-9][0-9]{5}$/);
}

// check if the value is positive number
export function isNumeric(value) {
  return value.match(/^\d+$/);
}

// check if the value is integer or float
export function isNumber(value, integerOnly = true) {
  if (integerOnly) {
    return value.match(/^\s*[+-]?\d+\s*$/);
  }

  return value.match(/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/);
}

export function isFloatNumber(value) {
  return String(value).match(/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/);
}

// check if the strinc contains alphabets (spaces) only
export function isAlphabet(value, allowSpaces = true) {
  if (allowSpaces) {
    return value.match(/^[a-zA-Z\s]+$/);
  }

  return value.match(/^[a-zA-Z]+$/);
}

export function isName(value) {
  return value.match(/^[a-zA-Z0-9,./\-' ]*$/);
}

// check if the string contains pattern(bookingid) only
export function isIdPattern(value) {
  return value.match(/^[a-zA-Z0-9]+$/);
}

export function stopSpaceToBeFirst(e) {
  var charCode = !e.charCode ? e.which : e.charCode;
  if (charCode == 32) {
    e.preventDefault();
  }
}

export function getObjectValue(obj, key, defaultValue = null) {
  let enumerator = obj;
  let property = key;

  if (isEnumerable(enumerator) && keyExists(property, enumerator)) {
    return enumerator[property];
  }

  const dotLastIndex = property.lastIndexOf(".");

  if (dotLastIndex >= 0) {
    const withoutLastKey = property.substr(0, dotLastIndex);
    enumerator = getObjectValue(enumerator, withoutLastKey, defaultValue);
    property = property.substr(dotLastIndex + 1);
  }

  if (isEnumerable(enumerator)) {
    return keyExists(property, enumerator)
      ? enumerator[property]
      : defaultValue;
  }
  return defaultValue;
}

export function isEnumerable(obj) {
  let isEnumerable = false;

  if (Array.isArray(obj) || obj instanceof Object) {
    isEnumerable = true;
  }

  return isEnumerable;
}

export const httpStatusCodes = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export function getObjectValueIfEmpty(obj, key, defaultValue = null) {
  const value = getObjectValue(obj, key);

  if (isEmpty(value)) {
    return defaultValue;
  }
  return value;
}

export function clone(oldObject, newObject) {
  return { ...oldObject, ...newObject };
}

export function keyExists(key, obj) {
  if (
    (Array.isArray(obj) && key in obj) ||
    (obj instanceof Object && Object.prototype.hasOwnProperty.call(obj, key))
  ) {
    return true;
  }

  return false;
}

export function toBuffer(ab) {
  var buffer = new Buffer(ab.byteLength);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) {
    buffer[i] = view[i];
  }
  return buffer;
}

export function checkValidity(value, rules) {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = !isEmpty(value) && isValid;
  }

  if (rules.minLength && !isEmpty(value)) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength && !isEmpty(value)) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail && !isEmpty(value)) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isMobile && !isEmpty(value)) {
    const pattern = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric && !isEmpty(value)) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNotZero && !isEmpty(value)) {
    const pattern = /^[-]?\d+$/;
    isValid = value != 0 ? pattern.test(value) && isValid : false;
  }

  if (rules.isNotMinusOne && !isEmpty(value)) {
    const pattern = /^[-]?\d+$/;
    isValid = value != -1 ? pattern.test(value) && isValid : false;
  }

  if (rules.isBid && !isEmpty(value)) {
    const pattern = /^[a-zA-Z0-9]+$/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isName && !isEmpty(value)) {
    const pattern = /^[a-zA-Z0-9,./\-' ]*$/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isDecimal && !isEmpty(value)) {
    const pattern = /^[0-1]\d*(\.\d+)?$/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isOBF && !isEmpty(value)) {
    // const pattern = /^[0-1]\d*(\.\d+)?$/;
    const pattern = /^[.]?[0-9]\d*(\.\d+)?$/;
    isValid = value <= 1 ? pattern.test(value) && isValid : false;
  }
  if (rules.isGSTIN && !isEmpty(value)) {
    const pattern = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[A-Z\d]{1}[A-Z\d]{1}$/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isPinCode && !isEmpty(value)) {
    const pattern = /^[1-9][0-9]{5}$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
}

export function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
  });
}

export function printUserName(userData) {
  return (userData && userData.firstName + " " + userData.lastName) || "";
}

export function printUserNameShort(userData) {
  return (userData && userData.firstName[0] + "" + userData.lastName[0]) || "";
}

export function removeOverlay() {
  if (document.querySelector(".modal-backdrop.fade.show")) {
    document.querySelector(".modal-backdrop.fade.show").remove();
    document.body.classList.remove("modal-open");
  }
}

export function addOverlay() {
  let elemDiv = document.createElement("div");
  elemDiv.setAttribute("class", "modal-backdrop fade show");
  document.body.appendChild(elemDiv);
  document.body.classList.add("modal-open");
}

export function autoFocusOTPForm(event) {
  const { maxLength, value, name } = event.target;
  const [fieldName, fieldIndex] = name.split("-");
  let fieldIntIndex = parseInt(fieldIndex);
  if (value.length == maxLength) {
    const nextfield = document.querySelector(
      `input[name=otp-${fieldIntIndex + 1}]`
    );
    if (nextfield !== null) {
      nextfield.focus();
    }
  }
}

export function getUserPermissions(login) {
  if (login && login.userData && login.userData.apiPermission) {
    return login.userData.apiPermission;
  }
  return "";
}

export function printPage() {
  if (typeof window) {
    window.print();
  }
}

export function hideMessage(message, setMessage) {
  if (message) {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }
}

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export function getQueryParams(query) {
  const queryArray = query.split("?")[1].split("&");
  const queryParams = {};
  for (let i = 0; i < queryArray.length; i++) {
    const [key, val] = queryArray[i].split("=");
    queryParams[key] = val || true;
  }
  return queryParams;
}

export function numberToCurrency(value) {
  if(!value) return '₹ 0';
  let v = (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  return `₹ ${v}`;
}
