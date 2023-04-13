import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import WebFont from "webfontloader";
import App from "./App";
import rootReducer from "./rootReducer";
import { getAuthToken, setAuthorizationToken } from "./utils/common";
import GlobalCss from "./global.css";

WebFont.load({
  google: {
    families: ["Roboto:300,400,700", "sans-serif"],
  },
});

const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
if (getAuthToken()) {
  setAuthorizationToken(getAuthToken());
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalCss />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

// http://pluralsight.com/guides/how-to-router-redirect-after-login
//8800578866
//12345678
