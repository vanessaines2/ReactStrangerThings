import React from "react";
import { useState } from "react";
import { registerUser } from "../API/api";

export function RegisterForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("results from handlesubmit", result);
      // setToken(result.data.token);
      // localStorage.setItem("token", result.data.token);
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
          onChange={(e) => {
            console.log(e.target.value);
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => {
            console.log(e.target.value);
            setPassword(e.target.value);
          }}
        />
        <button>Submit!</button>
      </form>
    </div>
  );
}
