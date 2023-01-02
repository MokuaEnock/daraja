import { useState } from "react";

export default function Main() {
  let [phone, setPhone] = useState("");
  let [total, setTotal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(phone, total);

    let payment = {
      phone,
      total,
    };

    fetch("http://localhost:3000/payment", {
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
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />

        <button type="submit">Confirm payment</button>
      </form>
    </main>
  );
}
