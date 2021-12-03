import React, { useState } from "react";
import { D3Test } from "_components/D3";

const PageTwo = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>
        Multiply by 2 on <strong>APP-2</strong>
      </p>
      <p>Your click count : {count}</p>
      <button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </button>
      <D3Test />
    </div>
  );
};

export default PageTwo;
