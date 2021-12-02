import React, { useContext, useState } from "react";
import { Shared } from "_components/Shared";
import { Context } from "_k/Context";
import { singleton } from "_k/singleton";

const PageOne = () => {
  const [count, setCount] = useState(0);
  const ctx = useContext(Context);

  return (
    <div>
      <p>
        Increment by 1 on <strong>APP-1</strong>
      </p>
      <p>Your click count : {count} </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Shared />
      <button
        style={{ margin: "2rem" }}
        onClick={() => console.log(singleton._var)}
      >
        Access singleton
      </button>
      <p>Context value : {ctx}</p>
    </div>
  );
};

export default PageOne;
