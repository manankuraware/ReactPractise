import React, { useState } from "react";
import { postData } from "../api/PostApi";

export const Form = ({ data, setData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    const res = await postData(addData);
    if (res.status = 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };
  //   form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="formcontainer">
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          autoComplete="off"
          name="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={handleInputChange}
        />
        <label htmlFor="body"></label>
        <input
          type="text"
          id="body"
          autoComplete="off"
          name="body"
          placeholder="Add Post"
          value={addData.body}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
