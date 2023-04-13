import React, { Suspense } from "react";
const Settings = React.lazy(() => import("./Settings"));

function SettingsLodable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Settings />
      </Suspense>
    </div>
  );
}

export default SettingsLodable;
