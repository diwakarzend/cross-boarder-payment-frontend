import React, { Suspense } from "react";

const LoginPage = React.lazy(() => import("./LoginPage"));

function LoginPageLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    </div>
  );
}

export default LoginPageLoadable;
