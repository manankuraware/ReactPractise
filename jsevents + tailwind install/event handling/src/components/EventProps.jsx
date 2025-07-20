import React from "react";
// #24: Passing Events as Props in React | Control Parent Function Using Child Component🔥
function EventProps() {
  const handleWelcumUser = (user) => {
    alert(`Padharo ${user} Ji`);
  };
  const handleHover = () => {
    alert(`THanks For Hovering`);
  };
  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcumUser("Manan")}
        onMouseEnter={handleHover}
      />
    </>
  );
}

export default EventProps;

const WelcomeUser = (props) => {
  return (
    <>
      <button onClick={props.onClick} className=" bg-orange-400 m-2">
        Click me
      </button>
      <button onMouseEnter={props.onMouseEnter} className=" bg-orange-400 m-2">
        Hover me
      </button>
      <button
        onClick={() => {
          alert("hello Mate");
        }}
        className=" bg-orange-400 m-2"
      >
        Greetings
      </button>
    </>
  );
};
