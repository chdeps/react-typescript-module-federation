import React, { useState } from "react";
import { Shared } from "_components/Shared";

const PageOne = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Increment by 1 on <strong>APP-1</strong>
      </p>
      <p>Your click count : {count} </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Shared />
    </div>
  );
};

export default PageOne;
