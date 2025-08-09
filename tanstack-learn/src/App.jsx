import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FetchRq } from "./pages/FetchRq";
import { FetchOld } from "./pages/FetchOld";
import { MainLayout } from "./component/Layout/MainLayout";
import { Home } from "./pages/Home";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FetchInv from "./component/UI/FetchInv";
import { InfiniteScroll } from "./pages/InfiniteScroll";

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
      {
        path: "/rq/:id",
        element: <FetchInv />,
      },
      {
        path: "/infinite",
        element: <InfiniteScroll />,
      },
    ],
  },
]);

export default function App() {
  const queryCLient = new QueryClient();

  return (
    <QueryClientProvider client={queryCLient}>
      <RouterProvider router={router}></RouterProvider>;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
