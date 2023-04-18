import React from "react";
import { useState } from "react";
import { registerUser } from "../API/api";

export function RegisterForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.log("error from register form token", error);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {error && <p>{error}</p>}
        <button>Submit!</button>
      </form>
    </div>
  );
}
