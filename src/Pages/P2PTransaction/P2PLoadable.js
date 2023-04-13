import React, { Suspense } from "react";

const P2PReports = React.lazy(() => import("./P2PTransaction"));

function P2PLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <P2PReports />
      </Suspense>
    </div>
  );
}

export default P2PLoadable;
