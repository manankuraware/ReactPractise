import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";

export const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  if (navigation.state === "loading") return <h1>Loading ...</h1>;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
