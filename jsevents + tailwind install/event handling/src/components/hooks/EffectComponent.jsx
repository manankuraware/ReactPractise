import React, { useEffect, useState } from "react";

export const EffectComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("Hello World", count);
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);

      document.title = `count:${count}`;
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <div>
      <h2>UseEffect Hook</h2>
      <p>Count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </div>
  );
};
