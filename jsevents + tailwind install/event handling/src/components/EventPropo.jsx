
export const EventPropo = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child clicked");
  };
  return (
    <section className="main-div">
      <div className="bg-orange-400 m-2 inline-block" onClickCapture={handleGrandParent}>
        <div className="bg-orange-400 m-2 inline-block" onClickCapture={handleParentClick}>
          <button className="bg-orange-400 m-2 inline-block" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};