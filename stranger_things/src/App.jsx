import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import AllPosts from "../components/AllPosts";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="head">
        <h2>Stranger Things</h2>
        <h3 className="links">
          <Link to="/">HOME</Link>
          <Link to="/posts">POSTS</Link>
          <Link to="/users">REGISTER</Link>
        </h3>
      </header>

      <Routes>
        {/* <Route path="/" element={<Login/>} */}
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/users" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
