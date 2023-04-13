import React, { Suspense } from "react";

const VendorList = React.lazy(() => import("./VendorList"));

function VendorListLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <VendorList />
      </Suspense>
    </div>
  );
}

export default VendorListLoadable;
