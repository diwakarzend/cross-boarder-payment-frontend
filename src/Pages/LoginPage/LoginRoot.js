import React from "react";
import LoginForm from "./LoginForm";
import LoginOtpForm from "./LoginOtpForm";

class LoginRoot extends React.Component {
  render() {
    let loginComponent = (
      <LoginForm
        isFormSubmitting={this.props.isLoginFormSubmitting}
        onLoginSubmit={this.props.onLoginSubmit}
      />
    );

    // show the otp form (one of Login or OTP form will be shown at a time)
    if (this.props.showOtpForm) {
      loginComponent = (
        <LoginOtpForm
          invalidOtpCount={this.props.invalidOtpCount}
          isFormSubmitting={this.props.isOTPFormSubmitting}
          onLoginOtpSubmit={this.props.onLoginOtpSubmit}
          onLoginOtpResend={this.props.onLoginOtpResend}
          onLoginOtpCancel={this.props.onLoginOtpCancel}
          onOtpLimitExceeded={this.props.onOtpLimitExceeded}
        />
      );
    }

    return this.props.showOtpForm == true ? (
      <LoginOtpForm
        invalidOtpCount={this.props.invalidOtpCount}
        isFormSubmitting={this.props.isOTPFormSubmitting}
        onLoginOtpSubmit={this.props.onLoginOtpSubmit}
        onLoginOtpResend={this.props.onLoginOtpResend}
        onLoginOtpCancel={this.props.onLoginOtpCancel}
        onOtpLimitExceeded={this.props.onOtpLimitExceeded}
      />
    ) : (
      <LoginForm
        isFormSubmitting={this.props.isLoginFormSubmitting}
        onLoginSubmit={this.props.onLoginSubmit}
      />
    );
  }
}

export default LoginRoot;
