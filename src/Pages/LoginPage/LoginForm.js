import React, { Fragment, useState } from "react";
import { isEmpty } from "../../utils/common";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";
import { LoginFormWrapper } from "./style";
import MaterialInput from "../../Components/Common/Form";
import IconEye from "../../assests/images/Icons/IconEye";
import IconTexta from "../../assests/images/Icons/IconTexta";
import IconLogo from "../../assests/images/Icons/IconLogo";
// import loginBg from "../../assests/images/cb_login.png";
const LoginForm = () => {
  const [formData, updateFormData] = useState({ userName: "", password: "" });
  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState("");

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     errors: {
  //       username: null,
  //       password: null,
  //       tenantId: 0,
  //     },
  //     forgotPasswordClicked: false,
  //     successMsg: "",
  //     showPassword: false,
  //   };
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  //   this.removeErrorMsg = this.removeErrorMsg.bind(this);
  // }

  const onFormSubmit = (e) => {
    e.preventDefault();
    // const formData = {
    //   username: this.username.value,
    //   password: this.password.value,
    //   tenantId: 1,
    // };
    // if (this.validateInput(formData)) {
    //   this.props.onLoginSubmit(formData);
    // }
  }

  // const validateInput = (data) => {
  //   if (isEmpty(data.username)) {
  //     this.setState({ errors: { username: "Username is required!" } });
  //     return false;
  //   }
  //   if (isEmpty(data.password)) {
  //     this.setState({ errors: { password: "Password is required!" } });
  //     return false;
  //   }

  //   return true;
  // }

  // const removeErrorMsg = () => {
  //   this.setState({ errors: { username: null, password: null } });
  // }

  const handleForgotPassword = () => {
    setForgotPasswordClicked(true)
  };

  const cancelForgotPassword = () => {
    setForgotPasswordClicked(false)
  };

  // const resetSuccess = () => {
  //   this.setState({
  //     forgotPasswordClicked: false,
  //     successMsg: "Password reset successfully",
  //   });
  // };

  const handleFormDataChange = (event) => {
    let inputVal = event.target.value;
    updateFormData({
      ...formData,
      [event.target.name]: inputVal,
    });
    setFormErrors({ [event.target.name]: "" });
  };
    // const _this = this;
    // const { errorMsg } = this.props;
    // const { forgotPasswordClicked, successMsg, showPassword } = this.state;
    return (
      <LoginFormWrapper className="login-form-wrapper">
        <div className="">
          {/* <div className="login-bg">
            <img src={"/images/login-banner.svg"} alt="" />
          </div> */}
          <div className="login-form">
            {/* <div className="form-heading text-center mb-28">
              <img
                src={"/images/texta-white-logo.png"}
                alt="INRPAY"
                className="logo-icon"
              />
            </div> */}
            <div className="login-form-inner">
              {forgotPasswordClicked ? (
                <ResetPassword
                  handleCancel={cancelForgotPassword}
                  resetSuccess={resetSuccess}
                />
              ) : (
                <Fragment>
                  <form
                    className="form-group flex space-between"
                    onSubmit={onFormSubmit}
                  >
                    <div className="logo-wrapper">
                      <div className="login-logo mb12">
                      <img src="/images/success.png" width="150" />
                      <img src={"/images/cb_login.png"} />

                        {/* <img
                          src={loginBg}
                          alt="INRPAY"
                          className="logo-icon"
                        /> */}
                        <IconTexta />
                      </div>
                      <h3 className="mb12">Easy & Fast Payment with UPI</h3>
                      <p>
                        Pay directly from your bank account using your mobile
                      </p>
                    </div>
                    <div className="form-text-wrapper">
                      <div className="form-text-inner">
                        <IconLogo />
                        <div className="title mb20">
                        Login to Dashboard
                        </div>
                        <MaterialInput
                          wrapperClassName="mobile-number"
                          // icon={<IconMobile />}
                          name="userName"
                          maxLength="10"
                          type="text"
                          onChange={handleFormDataChange}
                          placeholder="User ID / Mobile No."
                          value={formData?.userName}
                          error={error.userName}
                        />
                        <MaterialInput
                          wrapperClassName="mobile-number"
                          // icon={<IconMobile />}
                          name="password"
                          maxLength="10"
                          type="text"
                          onChange={handleFormDataChange}
                          placeholder="Password"
                          value={formData?.password}
                          error={error.password}
                        />
                        {/* {(successMsg || errorMsg) && (
                          <div
                            className={`${successMsg ? "alert-success" : "alert-danger"
                              } alert text-center`}
                            role="alert"
                          >
                            {successMsg || errorMsg}
                          </div>
                        )} */}

                        {/* <div className="floating-label-group inputgroup">
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
                        </div> */}
                        {/* <div className="floating-label-group inputgroup">
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
                              className={`eye-icon${!showPassword ? " cross" : ""
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
                        </div> */}
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

export default LoginForm;
