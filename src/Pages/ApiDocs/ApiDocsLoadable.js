import React, { Suspense } from "react";

const ApiDocs = React.lazy(() => import("./ApiDocs"));

function ApiDocsLoadable() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ApiDocs />
      </Suspense>
    </div>
  );
}

export default ApiDocsLoadable;
