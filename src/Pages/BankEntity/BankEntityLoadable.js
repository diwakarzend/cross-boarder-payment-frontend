import React, { Suspense } from "react";

const BankEntity = React.lazy(() => import("./BankEntity"));

function BankEntityLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BankEntity />
      </Suspense>
    </div>
  );
}

export default BankEntityLoadable;
