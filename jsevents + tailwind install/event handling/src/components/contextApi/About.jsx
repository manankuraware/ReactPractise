import React, { use } from "react";
import { BioContext } from "./Index";

export const About = () => {
  let myName;
  const newHook = true;
  if (newHook) {
    myName = use(BioContext);
  }
  return (
    <div>
      About {myName} Sir Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Laboriosam ipsa veritatis ullam maxime fugit reprehenderit.
      Molestiae neque corrupti error, aut maxime voluptate ab suscipit commodi
      est, vel sunt facere officia!
    </div>
  );
};
