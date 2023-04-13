import React, { Fragment } from "react";
import { isEmpty } from "../../utils/common";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";
import { LoginFormWrapper } from "./style";
import IconEye from "../../assests/images/Icons/IconEye";
import IconTexta from "../../assests/images/Icons/IconTexta";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        username: null,
        password: null,
        tenantId: 0,
      },
      forgotPasswordClicked: false,
      successMsg: "",
      showPassword: false,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.removeErrorMsg = this.removeErrorMsg.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const formData = {
      username: this.username.value,
      password: this.password.value,
      tenantId: 1,
    };
    if (this.validateInput(formData)) {
      this.props.onLoginSubmit(formData);
    }
  }

  validateInput(data) {
    if (isEmpty(data.username)) {
      this.setState({ errors: { username: "Username is required!" } });
      return false;
    }
    if (isEmpty(data.password)) {
      this.setState({ errors: { password: "Password is required!" } });
      return false;
    }

    return true;
  }

  removeErrorMsg() {
    this.setState({ errors: { username: null, password: null } });
  }

  handleForgotPassword = () => {
    this.setState({ forgotPasswordClicked: true });
  };

  cancelForgotPassword = () => {
    this.setState({ forgotPasswordClicked: false });
  };

  resetSuccess = () => {
    this.setState({
      forgotPasswordClicked: false,
      successMsg: "Password reset successfully",
    });
  };

  render() {
    const _this = this;
    const { errorMsg } = this.props;
    const { forgotPasswordClicked, successMsg, showPassword } = this.state;
    return (
      <LoginFormWrapper className="login-form-wrapper">
        <div className="">
          <div className="login-bg">
            <img src={"/images/login-banner.svg"} alt="" />
          </div>
          <div className="login-form">
            <div className="form-heading text-center mb-28">
              <img
                src={"/images/texta-white-logo.png"}
                alt="INRPAY"
                className="logo-icon"
              />
            </div>
            <div className="login-form-inner">
              {forgotPasswordClicked ? (
                <ResetPassword
                  handleCancel={this.cancelForgotPassword}
                  resetSuccess={this.resetSuccess}
                />
              ) : (
                <Fragment>
                  <form
                    className="form-group flex space-between"
                    onSubmit={this.onFormSubmit}
                  >
                    <div className="logo-wrapper">
                      <div className="login-logo mb12">
                        <IconTexta />
                      </div>
                      <h3 className="mb12">Easy & Fast Payment with UPI</h3>
                      <p>
                        Pay directly from your bank account using your mobile
                      </p>
                    </div>
                    <div className="form-text-wrapper">
                      <div className="form-text-inner">
                        <div className="title mb20">
                          Sign in to continue to TEXTA.
                        </div>
                        {(successMsg || errorMsg) && (
                          <div
                            className={`${
                              successMsg ? "alert-success" : "alert-danger"
                            } alert text-center`}
                            role="alert"
                          >
                            {successMsg || errorMsg}
                          </div>
                        )}

                        <div className="floating-label-group inputgroup">
                          <div className="flex space-between floating-label-input">
                            <input
                              id="user-name"
                              className={
                                this.username
                                  ? "form-control has-value"
                                  : "form-control"
                              }
                              autoFocus="autofocus"
                              type="tel"
                              ref={(input) => {
                                this.username = input;
                              }}
                              autoComplete="off"
                              onFocus={this.removeErrorMsg}
                              required
                            />
                            <label className="label" htmlFor="user-name">
                              Username
                            </label>
                          </div>
                        </div>
                        <div className="floating-label-group inputgroup">
                          <div className="flex space-between floating-label-input">
                            <input
                              id="password"
                              className={
                                this.password
                                  ? "form-control has-value"
                                  : "form-control"
                              }
                              type={showPassword ? "text" : "password"}
                              ref={(input) => {
                                this.password = input;
                              }}
                              onFocus={this.removeErrorMsg}
                              autoComplete="off"
                              required
                            />
                            <label className="label" htmlFor="password">
                              Password
                            </label>
                            <span
                              className={`eye-icon${
                                !showPassword ? " cross" : ""
                              }`}
                              onClick={() => {
                                _this.setState({
                                  ..._this.state,
                                  showPassword: !showPassword,
                                });
                              }}
                            >
                              <i
                                className="fa fa-eye fa-2x"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                          <div
                            className="reset-password cursor-pointer"
                            onClick={this.handleForgotPassword}
                          >
                            Forgot password
                          </div>
                        </div>
                        <input
                          type="submit"
                          value="Submit"
                          className="submit-btn primary-btn"
                        />
                      </div>
                    </div>
                  </form>
                </Fragment>
              )}
            </div>
            <div className="text-center footer-copy-text">
              © 2023 · Terms of use · Support
            </div>
          </div>
        </div>
      </LoginFormWrapper>
    );
  }
}

export default LoginForm;
