import React, { useState } from "react";

export const State = () => {
  //   console.log(useState());
  //   this console [undefined , function]
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <h1>{count}</h1>
        <button
          className="flex bg-slate-500  text-white p-2"
          onClick={handleButtonClick}
        >
          Increment
        </button>
      </section>
    </>
  );
};


// Yes, you can use normal JavaScript (e.g., document.getElementById().innerHTML = ...) in a React app to update the DOM, but you absolutely should not do it unless there is a very specific reason. Let’s break it down:

// React uses a virtual DOM to efficiently manage UI updates. Direct DOM manipulation breaks this abstraction.

// React won't know the DOM was changed, and you may see unexpected behavior (e.g., updates getting overridden or ignored).

// It makes code harder to maintain, harder to debug, and less predictable.