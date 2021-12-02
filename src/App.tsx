import React, { useEffect, useState } from "react";
import { Shared } from "_components/Shared";
//@ts-ignore
const PageTwo = React.lazy(() => import("page2/PageTwo"));
import IntegratedPageTwo from "_pages/page2/src/PageTwo";
import { init, singleton } from "_k/singleton";
import { Provider } from "_k/Context";
//@ts-ignore
const PageOne = React.lazy(() => import("page1/PageOne"));

export default () => {
  const [isPageOne, setIsPageOne] = useState(true);
  useEffect(() => {
    init();
  }, []);

  return (
    <Provider>
      <div style={{ margin: "20px" }}>
        <div
          style={{
            border: "1px dashed black",
            height: "100%",
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
            <button
              style={{ margin: "2rem" }}
              onClick={() => setIsPageOne((_) => !_)}
            >
              Switch page
            </button>
            <button
              style={{ margin: "2rem" }}
              onClick={() => console.log(singleton._var)}
            >
              Access singleton
            </button>
          </div>
        </div>
      </div>
    </Provider>
  );
};
