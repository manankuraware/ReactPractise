import { createContext, use, useContext } from "react";

// Whenever u create context it create a context component so name accordingly as here Biocontext is component

// step 1
export const BioContext = createContext();

// step 2

// provider is warehouse which store values which we want to pass

// Step 3 we have to Wrapp componets which using this value inside as children here

export const BioProvider = ({ children }) => {
  const myName = "Manan Kuraware";
  return <BioContext.Provider value={myName}>{children}</BioContext.Provider>;
};

// custom Hook
export const useBioContext = () => {
  const context = useContext(BioContext);
  // const context = use(BioContext);
  if (context === undefined) {
    throw new Error("Context Must be Wrapper Between the Provider");
  }
  return context;
};
