export const ParentComponent = () => {
  return (
    <section>
      <h1>Component A</h1>
      <ChildComponent data="React Js" />
    </section>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <h2>Hello, i'm compone B</h2>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <h2>Hello, i'm compone C</h2>
      <GreatGrandChildComponent data={props.data} />
    </>
  );
};

const GreatGrandChildComponent = (props) => {
  return (
    <>
      <h2>Hello, i love {props.data}</h2>
    </>
  );
};
