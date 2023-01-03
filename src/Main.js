import { useState } from "react";

export default function Main() {
  let [phone, setPhone] = useState("");
  let [total, setTotal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let payment = {
      phone,
      total,
    };

    fetch("http://localhost:3000/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payment),
    }).then((res) => {
      if (res.ok) {
        console.log("success", res);
      } else {
        console.log("Failed");
      }
    });
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <span>Confirm payment</span>
        <input
          type="number"
          value={phone}
          placeholder ="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="number"
          value={total}
          placeholder ="Amount"
          onChange={(e) => setTotal(e.target.value)}
        />

        <button type="submit">Confirm payment</button>
      </form>
    </main>
  );
}
