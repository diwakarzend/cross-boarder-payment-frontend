import React, { Fragment, useState } from "react";
import { isEmpty } from "../../utils/common";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";
import { LoginFormWrapper } from "./style";
import { formValidation } from "../../utils/formValidation";
import ErrorMessage from "../../Components/ErrorMessage";
import MaterialInput from "../../Components/Common/Form";
import IconMobile from "../../assests/images/Icons/IconMobile";
import IconEye from "../../assests/images/Icons/IconEye";
import IconPassword from "../../assests/images/Icons/IconPassword";
import IconTexta from "../../assests/images/Icons/IconTexta";
import IconLogo from "../../assests/images/Icons/IconLogo";
import { ButtonSolid, Text } from "../../Components/styledConstants";
// import loginBg from "../../assests/images/cb_login.png";
const LoginForm = ({ onLoginSubmit, errorMsg }) => {
  const [formData, updateFormData] = useState({ userName: "", password: "" });
  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // const [error, setError] = useState("");

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
    const payload = {
      username: formData.userName,
      password: formData.password,
      tenantId: 1,
    };
    const errors = formValidation(formData);
    if (!!errors && Object.keys(errors).length != 0) {
      setFormErrors(errors);
    } else {
      onLoginSubmit(payload);
    }
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

  const resetSuccess = () => {
    // this.setState({
    // forgotPasswordClicked: false,
    // successMsg: "Password reset successfully",
    // });
    setForgotPasswordClicked(false);
    setSuccessMsg("Password reset successfully");
  };

  const handleFormDataChange = (event) => {
    let inputVal = event.target.value;
    updateFormData({
      ...formData,
      [event.target.name]: inputVal,
    });
    setFormErrors({ [event.target.name]: "" });
  };
  // const _this = this;
  // const { errorMsg } = this.props;`
  // const { forgotPasswordClicked, successMsg, showPassword } = this.state;
  console.log('33', errorMsg)
  return (
    <LoginFormWrapper className="login-form-wrapper">
      <div className="login-form">
        <div className="login-form-inner">
            <Fragment>
              <form
                className="form-group flex space-between"
                onSubmit={onFormSubmit}
              >
                <div className="banner">
                  <div className="inner-box">
                    <div className="banner-box">
                      <img src={"/images/cb_login.png"} />
                      <Text className="banner-text" as="span">
                        Transfer money globally at the best exchange rate & lowest fee
                      </Text>
                      <Text className="banner-text banner-heading" as="h3">
                        Sending Money Abroad from India just got easier.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="form-text-wrapper">
                  <div className="form-text-inner">
                    
                    {forgotPasswordClicked ? (
                      <ResetPassword
                        handleCancel={cancelForgotPassword}
                        resetSuccess={resetSuccess}
                      />) :
                      <>
                      <div className="logo">
                      <IconLogo />
                      <div className="title mb20">
                        Login to Dashboard
                      </div>
                    </div>
                        {errorMsg && <ErrorMessage className="mb20" error={errorMsg} datetimestamp={+new Date()} />}
                        <div className="mb16">
                          <MaterialInput
                            wrapperClassName="username"
                            icon={<IconMobile />}
                            maxLength="10"
                            name="userName"
                            type="text"
                            onChange={handleFormDataChange}
                            placeholder="User ID / Mobile No."
                            value={formData?.userName}
                            error={formErrors.userName}
                          />
                        </div>
                        <div className="pos-rel">
                          <MaterialInput
                            wrapperClassName="password"
                            icon={<IconPassword />}
                            name="password"
                            type={showPassword ? "text" : "password"}
                            onChange={handleFormDataChange}
                            placeholder="Password"
                            value={formData?.password}
                            error={formErrors.password}
                          />
                          <span
                            className={`icon-eye pointer${showPassword ? " active" : ""}`}
                            onClick={() => setShowPassword(!showPassword)}
                            role="button"
                            tabIndex={0}
                          >
                            <IconEye />
                          </span>
                        </div>
                        <ButtonSolid primary xl className="mt30 full-width" type="button" onClick={onFormSubmit}>
                      Login
                    </ButtonSolid>
                    <div className="text-box">
                      <Text className="pointer underline" as="span" size="sm" color="color3" onClick={handleForgotPassword}>
                        Forgot Password?
                      </Text>
                      <Text as="span" size="sm" color="color3">
                        Don't have a P2P Solution account
                      </Text>
                    </div>

                    <ButtonSolid secondary xl className="mt16 full-width" type="button">
                      Create New Account
                    </ButtonSolid>
                    <div className="text-center footer-copy-text">
                      © 2023 · Terms of use · Support
                    </div>
                      </>
                    }
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
                    {/* <input
                      type="submit"
                      value="Submit"
                      className="submit-btn primary-btn"
                    /> */}
                    
                  </div>
                </div>
              </form>
            </Fragment>
        </div>

      </div>
    </LoginFormWrapper>
  );
}

export default LoginForm;
