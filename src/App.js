import "./App.css";

function App() {
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
