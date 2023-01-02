import { useState } from "react";

export default function Main() {
  let [phone, setPhone] = useState("");

  return (
    <main>
      <from>
        <input type="number" value={phone} on />
      </from>
    </main>
  );
}
