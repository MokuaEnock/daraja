import { useState } from "react";

export default function Main() {
  let [phone, setPhone] = useState("");
  let [total, setTotal] = useState("");

  return (
    <main>
      <from>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </from>
    </main>
  );
}
