import React, { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import "./Post.css";

export default function Post() {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);
  return (
    <section className="post-container">
      <ol className="post-wrapper">
        {data.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
