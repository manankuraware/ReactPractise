export default function EventHandling() {
  // Method 1
  //   function handleButtonClick() {
  //     alert("Hey I am a Click Event");
  //   }
  //   method 2
  const handleButtonClick = (event) => {
    console.log(event);
    // console show synthetic event wrapper
    alert("Event Clicked");
  };
  const handleWelcomeUser = (user) => {
    alert(`Hey ${user} Welcome`);
  };
  return (
    <div className="text-center py-1.5">
      <button onClick={handleButtonClick} className=" bg-orange-400 m-2">
        Click Me
      </button>

      <button
        onClick={() => handleWelcomeUser("manan")}
        className=" bg-orange-400 m-2"
      >
        Hey
      </button>
    </div>
  );
}
