import React, { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const isEmpty = Object.keys(updateDataApi).length === 0;
  // get updated data into input field
  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

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
    if ((res.status = 201)) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  // update post
  const updatePostdata = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      if (res.status === 200) {
        setData((prev) => {
          return prev.map((curElem) => {
            return curElem.id === res.data.id ? res.data : curElem;
          });
        });
        setAddData({ title: "", body: "" });
        setUpdateDataApi({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // to get form submit button value
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostdata();
    }
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
        <button type="submit" value={isEmpty ? "Add" : "Edit"}>
          {isEmpty ? "Add" : "Edit"}
        </button>
      </div>
    </form>
  );
};
