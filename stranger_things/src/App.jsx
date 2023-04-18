import { Routes, Route, Link } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";
import AllPosts from "../components/AllPosts";
import "./App.css";
import { useState } from "react";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className="App">
      <h1>
        <nav className="navbar">
          <Link to="/">All Posts </Link>
          <Link to="/users/register"> Register</Link>
        </nav>
      </h1>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route
          path="/users/register"
          element={<RegisterForm setToken={setToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;
