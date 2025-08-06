import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchInvPost } from "../../API/api";

export default function FetchInv() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchInvPost(id),
  });

  if (isLoading) return <p>is Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="section-accordion">
        <p>Id: {data.id}</p>
        <p>Title: {data.title}</p>
        <p>Body: {data.body}</p>
      </div>
    </div>
  );
}
