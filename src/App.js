import "./App.css";
import TableList from "./components/TableList";
import React, { useState } from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      stack: "Mern Stack",
      styleBtn: "btn btn-outline-success w-100",
    },
    {
      id: 2,
      title: "Java",
      stack: "Python Stack",
      styleBtn: "btn btn-outline-danger w-100",
    },
    {
      id: 3,
      title: "Flutter",
      stack: "Go Stack",
      styleBtn: "btn btn-outline-warning w-100",
    },
    {
      id: 4,
      title: "Express",
      stack: "Mean Tech",
      styleBtn: "btn btn-outline-secondary w-100",
    },
    {
      id: 5,
      title: "React",
      stack: "Redux Tech",
      styleBtn: "btn btn-outline-primary w-100",
    },
    {
      id: 6,
      title: "C#",
      stack: "ASP.NET",
      styleBtn: "btn btn-outline-info w-100",
    },
  ]);

  const [title, setTitle] = useState("");
  const [stack, setStack] = useState("");
  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: title,
      stack: stack,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App w-50 mx-auto my-5">
      <form>
        <h5 className="text-center">Create your first post</h5>
        <MyInput
          type="text"
          className="form-control"
          placeholder="Programming Language"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <MyInput
          type="text"
          className="form-control"
          placeholder="Programming Language"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
        />

        <MyButton styleB="btn btn-primary w-100" onClick={addPost}>
          Add Post
        </MyButton>
      </form>
      <TableList posts={posts} title="Programming Language" />
    </div>
  );
}

export default App;
