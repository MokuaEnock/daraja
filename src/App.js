import "./App.css";
import { useState } from "react";

function App() {
  let [phone, setPhone] = useState("");
  let [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Returns a zero-based month (0-11)
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    function secss(x) {
      if (x < 10) {
        return `0${x}`;
      } else {
        return `${x}`;
      }
    }
    let timestamped = `${year}${month}${day}${hour}${minutes}${secss(seconds)}`;
    console.log(phone, amount, timestamped);

  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
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

export default App;
