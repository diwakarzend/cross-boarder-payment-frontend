import React from "react";
import { clearAuthToken } from "../../utils/common";
import { loginResetStore } from "../../actions/Login";

const Logout = React.memo((props) => {
  const { history, dispatch } = props;
  const logout = () => {
    clearAuthToken();
    dispatch(loginResetStore());
    history.push("/");
  };

  return (
    <a onClick={() => logout()}>
      <i className="icon-logout"></i> Log Out
    </a>
  );
});

export default Logout;
