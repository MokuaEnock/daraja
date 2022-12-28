import "./App.css";
import { useState } from "react";

function App() {
  let [phone, setPhone] = useState("");
  let [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Phone"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
