import React, { Suspense } from "react";
const FundRequest = React.lazy(() => import("./FundRequest"));

function FundRequestLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FundRequest />
      </Suspense>
    </div>
  );
}

export default FundRequestLoadable;
