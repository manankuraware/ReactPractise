import { useRef } from "react";

export const UseRefLarn = () => {
  const username = useRef(null);
  const password = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" id="Username" ref={username} />
      <br />
      <input type="password" id="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
};
