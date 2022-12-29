import "./App.css";
import { useState } from "react";

function App() {
  let [phone, setPhone] = useState("");
  let [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1; // Returns a zero-based month (0-11)
    // const day = date.getDate();
    // const hour = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();

    // function secss(x) {
    //   if (x < 10) {
    //     return `0${x}`;
    //   } else {
    //     return `${x}`;
    //   }
    // }
    // let timestamped = `${year}${month}${day}${hour}${minutes}${secss(seconds)}`;
    // console.log(phone, amount, timestamped);

    // let short_code = 174379;
    // let passkey =
    //   "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
    // let party_a = 254717594017;
    // let account_ref = 2255;
    // let sty = `${short_code}${passkey}${timestamped}`;
    // let password = btoa(sty);

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
