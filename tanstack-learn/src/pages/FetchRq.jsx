import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchPosts } from "../API/api";
import { NavLink } from "react-router-dom";

export const FetchRq = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    // gcTime: 5000,
    // staleTime: 5000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <NavLink to={`/rq/${id}`}>
              <li key={id}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </li>
            </NavLink>
          );
        })}
      </ul>
      <div className="pagination-section container">
        <button
          disabled={pageNumber === 0 ? true : false}
          onClick={() => setPageNumber((prev) => (prev > 0 ? prev - 3 : prev))}
        >
          Prev
        </button>
        <h2>{pageNumber}</h2>
        <button onClick={() => setPageNumber((prev) => prev + 3)}>Next</button>
      </div>
    </div>
  );
};
