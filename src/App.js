// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
//  import "./assests/css/style.css";
//  import "./assests/css/themify-icons.css";
//  import "./assests/css/jquery.mCustomScrollbar.css";
//   import "./assests/css/simple-line-icons.css";
//   import "./assests/css/ionicons.css";

//import "../public/css/style.css";
import React, { Component, Fragment, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAuthToken } from "./utils/common";
import { fetchUserDetailsIfNeeded, updateLoginStatus } from "./actions/Login";

import Routes from "./Router/Routes";
import { Wrapper } from "./style";
// import "./index.css";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (getAuthToken()) {
      dispatch(fetchUserDetailsIfNeeded());
      dispatch(updateLoginStatus(true));
    }
  }
  componentDidUpdate(prevProps, PrevState) {
    const { login, dispatch } = this.props;
    const prevLogedIn =
      prevProps && prevProps.login && prevProps.login.isLoggedIn;
    if (login.isLoggedIn && login.isLoggedIn !== prevLogedIn) {
      dispatch(fetchUserDetailsIfNeeded());
    }

  }

  render() {
    
    const { login } = this.props;
    const permissions = login && login.userData && login.userData.apiPermission;

 
    if (login.isLoggedIn && permissions && permissions.length !== 0) {
      return (
        <Wrapper className="app-container">
          <Header />
          <div className="no-access">
            <h1>
              You are not authorize to access this page, please contact to site
              Administrator
            </h1>
          </div>
          <Footer />
        </Wrapper>
      );
    }
    return (
      <Routes />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default withRouter(connect(mapStateToProps)(App));
