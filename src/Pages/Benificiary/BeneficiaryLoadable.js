import React, { Suspense } from "react";

const Benificiary = React.lazy(() => import("./Benificiary"));

function BeneficiaryLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Benificiary />
      </Suspense>
    </div>
  );
}

export default BeneficiaryLoadable;
