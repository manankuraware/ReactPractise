import React, { memo, useCallback, useState } from "react";

// Memoized Button to prevent unnecessary re-renders
const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

export const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("increment inside");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrement inside");
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <h1>Count: {count} (UseCallback)</h1>

      {/* Using the memoized Button component and onclick as prop */}
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};
