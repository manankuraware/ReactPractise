import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./components/UI/MovieDetails";

function App() {
  // using traditional way of router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      // The error element renders instead of the children when the promise rejects.
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        // creating Dynamic Route
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  // using  way of helper Function
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Route>
  //   )
  // );

  return <RouterProvider router={router} />;
}

export default App;
