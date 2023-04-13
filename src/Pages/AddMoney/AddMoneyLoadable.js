import React, { Suspense } from "react";

const AddMoney = React.lazy(() => import("./AddMoney"));

function AddMoneyLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AddMoney />
      </Suspense>
    </div>
  );
}

export default AddMoneyLoadable;
