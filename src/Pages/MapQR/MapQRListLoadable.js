import React, { Suspense } from "react";

const MapQR = React.lazy(() => import("./MapQR"));

function MapQRListLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MapQR />
      </Suspense>
    </div>
  );
}

export default MapQRListLoadable;
