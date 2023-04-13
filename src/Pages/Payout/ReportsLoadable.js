import React, { Suspense } from "react";
const Reports = React.lazy(() => import("./Reports"));

function ReportsLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Reports />
      </Suspense>
    </div>
  );
}

export default ReportsLoadable;
