import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FetchRq } from "./pages/FetchRq";
import { FetchOld } from "./pages/FetchOld";
import { MainLayout } from "./component/Layout/MainLayout";
import { Home } from "./pages/Home";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRq />,
      },
    ],
  },
]);

export default function App() {
  const queryCLient = new QueryClient();

  return (
    <QueryClientProvider client={queryCLient}>
      <RouterProvider router={router}></RouterProvider>;
    </QueryClientProvider>
  );
}
