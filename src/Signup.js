import { useState } from "react";

export default function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");

  return (
    <main>
      <form>
        <input type="text" placeholder="Email" value={email} />
        <input type="text" placeholder="Enter Password" />
        <input type="text" placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </form>
      <span>Signup With Google</span>
    </main>
  );
}
