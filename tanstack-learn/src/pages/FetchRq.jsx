import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { deletePost, fetchPosts, updatePost } from "../API/api";
import { NavLink } from "react-router-dom";

export const FetchRq = () => {
  const [pageNumber, setPageNumber] = useState(0);

  // useQueryClient to access local storage data
  const queryClient = useQueryClient();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    // gcTime: 5000,
    // staleTime: 5000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
    placeholderData: keepPreviousData,
  });

  // mutation function to delete the post
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      // run on success delete and delete from local storage
      queryClient.setQueryData(["posts", pageNumber], (curElem) => {
        return curElem?.filter((post) => post.id !== id);
      });
    },
  });

  // mutation function to update the post
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (apiData, postId) => {
      // run on success update and update from local storage
      queryClient.setQueryData(["posts", pageNumber], (postData) => {
        return postData?.map((curPost) => {
          return curPost.id === postId
            ? { ...curPost, title: apiData.data.title }
            : curPost;
        });
      });
    },
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <div key={id}>
              <NavLink to={`/rq/${id}`}>
                <li key={id}>
                  <p>{id}</p>
                  <p>{title}</p>
                  <p>{body}</p>
                </li>
              </NavLink>
              <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
              <button onClick={() => updateMutation.mutate(id)}>Update</button>
            </div>
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
