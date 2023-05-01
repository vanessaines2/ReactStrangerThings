import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import AllPosts from "../components/AllPosts";
import { useState } from "react";
import "./App.css";
import { LoginForm } from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";
import CreatePost from "../components/CreatePosts";
import Profile from "../components/Profile";
import Message from "../components/Message";
import { UpdatedPost } from "../components/UpdatedPosts";

function App() {
  const { token, user } = useAuth();
  console.log("token from app", token);
  console.log("user from app", user);
  return (
    <div className="app">
      <header className="head">
        <h2>STRANGER THINGS</h2>
        <h3 className="links">
          <Link to="/"> HOME</Link>
          <Link to="/posts">POSTS </Link>
        </h3>
        {token && (
          <h3 className="links">
            <Link to="/create-posts"> CREATE POSTS </Link>
            <Link to="/users/me"> PROFILE </Link>
          </h3>
        )}
      </header>

      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/users/login" element={<LoginForm />} />
        <Route path="/post/:postId/messages" element={<Message />} />
        <Route path="/create-posts" element={<CreatePost />} />
        <Route path="/users/me" element={<Profile />} />
        <Route path="/posts/:postId" element={<UpdatedPost />} />
      </Routes>
    </div>
  );
}

export default App;
