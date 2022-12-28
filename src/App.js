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
        <input type="number" placeholder="Phone" />
        <input type="number" placeholder="Total" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
