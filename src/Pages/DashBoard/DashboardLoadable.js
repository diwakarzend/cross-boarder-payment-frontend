import React, { Suspense } from "react";

const DashBoard = React.lazy(() => import("./DashBoard"));

function DashBoardLoadable() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <DashBoard />
      </Suspense>
  );
}

export default DashBoardLoadable;
