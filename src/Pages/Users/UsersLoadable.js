import React, { Suspense } from "react";
const Users = React.lazy(() => import("./Users"));

function UsersLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
    </div>
  );
}

export default UsersLoadable;
