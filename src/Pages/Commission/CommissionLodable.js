import React, { Suspense } from "react";
const Commission = React.lazy(() => import("./Commission"));

function CommissionLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Commission />
      </Suspense>
    </div>
  );
}

export default CommissionLoadable;
