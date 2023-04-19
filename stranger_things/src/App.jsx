import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import AllPosts from "../components/AllPosts";
import { useState } from "react";
import "./App.css";
import { LoginForm } from "../components/LoginForm";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className="app">
      <header className="head">
        <h2>STRANGER THINGS</h2>
        <h3 className="links">
          <Link to="/">HOME</Link>
          <Link to="/posts">POSTS</Link>
          <Link to="/users/register">REGISTER</Link>
        </h3>
      </header>

      <Routes>
        <Route path="/" element={<LoginForm setToken={setToken} />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route
          path="/users/register"
          element={<RegisterForm setToken={setToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;
