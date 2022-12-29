import { useState } from "react";

export default function Landing() {
  let [phone, setPhone] = useState("");
  let [amount, setAmount] = useState("");
  return (
    <main>
      <form>
        <input
          type="number"
          placeholder="Phone"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Total"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
