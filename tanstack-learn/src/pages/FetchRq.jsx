import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPosts } from "../API/api";

export const FetchRq = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // gcTime: 5000,
    // staleTime: 5000,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
