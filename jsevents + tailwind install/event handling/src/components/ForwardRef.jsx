import React, { forwardRef, useId, useRef } from "react";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReacr19 label="username" ref={username} type="text" />
      <br />
      <BeforeReacr19 label="Password" ref={password} type="password" />
      <br />
      <button>Submit</button>
    </form>
  );
};

// using old forward ref
// const BeforeReacr19 = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>{props.label}</label>
//       <input type={props.type} ref={ref} id={id} />
//     </div>
//   );
// });

// After React 16
const BeforeReacr19 = (props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type={props.type} ref={props.ref} id={id} />
    </div>
  );
};
