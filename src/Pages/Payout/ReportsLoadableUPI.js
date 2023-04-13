import React, { Suspense } from "react";
const UPIReports = React.lazy(() => import("./UPIReports"));

function ReportsLoadableUPI() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UPIReports />
      </Suspense>
    </div>
  );
}

export default ReportsLoadableUPI;
