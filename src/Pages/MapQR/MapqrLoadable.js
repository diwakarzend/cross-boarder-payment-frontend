import React, { Suspense } from "react";

const MapQR = React.lazy(() => import("./MerchantDetails"));

function MapQRPageLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MapQR />
      </Suspense>
    </div>
  );
}

export default MapQRPageLoadable;
