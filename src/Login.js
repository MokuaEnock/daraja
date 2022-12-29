import React from "react";
import { useState } from "react";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return (
    <main>
      <form>
        <input type="text" placeholder="Email" />
        <input type="email" placeholder="Password" />

        <button type="submit">Log In</button>
      </form>

      <span>Login with Google</span>
    </main>
  );
}
