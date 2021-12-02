import React, { useState } from "react";
import { Shared } from "_components/Shared";
//@ts-ignore
const PageTwo = React.lazy(() => import("page2/PageTwo"));
import IntegratedPageTwo from "_pages/page2/src/PageTwo";
//@ts-ignore
// import PageOne from "page1/PageOne";
const PageOne = React.lazy(() => import("page1/PageOne"));

export default () => {
  const [isPageOne, setIsPageOne] = useState(true);
  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          border: "1px dashed black",
          height: "50vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>CONTAINER</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              marginRight: "2rem",
              padding: "2rem",
              border: "1px dashed black",
            }}
          >
            {isPageOne ? (
              <React.Suspense fallback="Loading page one...">
                <h2>APP-1</h2>
                <PageOne />
              </React.Suspense>
            ) : (
              <React.Suspense fallback="Loading page two...">
                <h2>APP-2</h2>
                <PageTwo />
              </React.Suspense>
            )}
          </div>
          <div style={{ border: "1px dashed black", padding: "2rem" }}>
            <h2>CONTAINER-APP-2</h2>
            <IntegratedPageTwo />
            <Shared />
          </div>
        </div>
        <div
          style={{
            margin: "2rem",
          }}
        >
          <button onClick={() => setIsPageOne((_) => !_)}>Switch page</button>
        </div>
      </div>
    </div>
  );
};
