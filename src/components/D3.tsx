import { useEffect } from "react";

let d3;

export const D3Test = () => {
  useEffect(() => {
    import(/* webpackChunkName: "d3", webpackPrefetch: true */ "d3").then(
      (d3js) => {
        d3 = d3js.default;
      }
    );
  }, []);

  return <p>D3</p>;
};
