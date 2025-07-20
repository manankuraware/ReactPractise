import React from "react";
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}
// learning dynamic values in jsx 

// Components are nothing but function 

export const DynamicVal = () => {
  const title="Amazing scientists";
  return (
    <section>
      <h1>{title} {1+0.1}</h1>
      <Profile />
      <Profile />
    </section>
  );
};
export const MyDynamic = () => {
  return (
    <section>
      Named export can return multiple values
    </section>
  );
};