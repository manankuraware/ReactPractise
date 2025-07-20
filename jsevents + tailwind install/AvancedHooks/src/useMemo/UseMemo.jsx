import { useMemo, useState } from "react";

const ExpensiveComponet = () => {
  const sum = () => {
    console.log("Calculating Sum...");
    let i = 0;
    for (i = 0; i <= 100000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(() => sum(), []);
  //   const total = sum();
  return <p>Sum:{total}</p>;
};

const MemoParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="memocontainer">
      <button onClick={() => setCount(count + 1)}>Re render Parent</button>
      <p>Parent Rerenders:{count}</p>
    </div>
  );
};

export default MemoParentComponent;
