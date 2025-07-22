import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  // we can also use useRouteError Hook
  const error = useRouteError();
  //   console.log(error);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  if (error.status === 404) {
    return (
      <div>
        <h1>404 Error Page</h1>
        <button onClick={handleGoBack}>Back to previous Page</button>
      </div>
    );
  }
  return (
    <div>
      <h1>404 Error Page</h1>
    </div>
  );
};
