import React, { useState } from "react";

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
    </div>
  );
};

export default PageTwo;
