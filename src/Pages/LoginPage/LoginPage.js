import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { loginRequest, loginResetStore } from "../../actions/Login";
import LoginForm from "./LoginForm";

class LoginPage extends PureComponent {
  componentDidUpdate(preProps, prevState) {
    const { login, history } = this.props;
    if (
      history &&
      login &&
      login.isLoggedIn &&
      preProps.login.isLoggedIn !== login.isLoggedIn
    ) {
      //  loginResetStore();
      history.push("/dashboard");
    }
  }

  onLoginSubmit = (data) => {
    const { dispatch } = this.props;
    const params = {
      username: data.username,
      password: data.password,
      tenantId: 1,
      //   userType: "EXECUTIVE"
    };

    dispatch(loginRequest(params));
  };

  /*  onLoginOtpSubmit(data) {
    const params = {
      username: this.props.userData.username,
      otp: data.otp,
      userType: "EXECUTIVE",
    };
    this.props.loginOtpValidationRequest(params);
  }

  onLoginOtpCancel() {
    this.props.loginResetStore();
  }

  onOtpLimitExceeded() {
    this.props.loginResetStore();
  }

  onLoginOtpResend() {
    const params = {
      username: this.props.userData.username,
      userType: "EXECUTIVE",
    };
    this.props.loginOtpResendRequest(params);

  shouldShowOTPForm() {
    return this.props.isLoggedIn && !this.props.isOtpValidated;
  } */

  render() {
    const { handleForgotPassword } = this.props;
    const { login } = this.props;
    let errorMsg = "";
    if (
      login &&
      login.loginInfo &&
      login.loginInfo.data &&
      login.loginInfo.data.success == false
    ) {
      errorMsg = login.loginInfo.data.msg;
    }

    return (
      <LoginForm
        isFormSubmitting={this.props.isLoginFormSubmitting}
        onLoginSubmit={this.onLoginSubmit}
        errorMsg={errorMsg}
        handleForgotPassword={this.handleForgotPassword}
      />
    );

    // show the otp form (one of Login or OTP form will be shown at a time)
    // if (this.props.showOtpForm) {
    //   loginComponent = (
    //     <LoginOtpForm
    //       invalidOtpCount={this.props.invalidOtpCount}
    //       isFormSubmitting={this.props.isOTPFormSubmitting}
    //       onLoginOtpSubmit={this.props.onLoginOtpSubmit}
    //       onLoginOtpResend={this.props.onLoginOtpResend}
    //       onLoginOtpCancel={this.props.onLoginOtpCancel}
    //       onOtpLimitExceeded={this.props.onOtpLimitExceeded}
    //     />
    //   );
    // }

    // return this.props.showOtpForm == true ? (
    //   <LoginOtpForm
    //     invalidOtpCount={this.props.invalidOtpCount}
    //     isFormSubmitting={this.props.isOTPFormSubmitting}
    //     onLoginOtpSubmit={this.props.onLoginOtpSubmit}
    //     onLoginOtpResend={this.props.onLoginOtpResend}
    //     onLoginOtpCancel={this.props.onLoginOtpCancel}
    //     onOtpLimitExceeded={this.props.onOtpLimitExceeded}
    //   />
    // ) : (
    //   <LoginForm
    //     isFormSubmitting={this.props.isLoginFormSubmitting}
    //     onLoginSubmit={this.props.onLoginSubmit}
    //   />
    // );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(LoginPage);
