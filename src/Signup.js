import { useState } from "react";

export default function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <span>Signup With Google</span>
    </main>
  );
}
