import React, { useState } from "react";
//@ts-ignore
const PageTwo = React.lazy(() => import("page2/PageTwo"));
import IntegratedPageTwo from "./pages/page2/src/PageTwo";
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
          {isPageOne ? (
            <React.Suspense fallback="Loading page one...">
              <div
                style={{
                  marginRight: "2rem",
                  padding: "2rem",
                  border: "1px dashed black",
                }}
              >
                <h2>APP-1</h2>
                <PageOne />
              </div>
            </React.Suspense>
          ) : (
            <React.Suspense fallback="Loading page two...">
              <div style={{ border: "1px dashed black", padding: "2rem" }}>
                <h2>APP-2</h2>
                <PageTwo />
              </div>
            </React.Suspense>
          )}
          <div style={{ border: "1px dashed black", padding: "2rem" }}>
            <h2>INTEGRATED-APP-2</h2>
            <IntegratedPageTwo />
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
