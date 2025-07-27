import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "./Post.css";

export default function Post() {
  const [data, setData] = useState([]);

  // function to get post
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // function to delete post
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id != id;
        });
        setData(newUpdatedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              <button
                onClick={() => {
                  handleDeletePost(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
