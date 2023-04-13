import React, { Suspense } from "react";

const Transaction = React.lazy(() => import("./Transaction"));

function P2PLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Transaction />
      </Suspense>
    </div>
  );
}

export default P2PLoadable;
