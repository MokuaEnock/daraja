import "./App.css";
import Login from "./login";
import Signup from "./Signup";
import Landing from "./Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={Login} path="/login" />
          <Route element={Landing} path="/landing" />
          <Route element={Signup} path="/signup" />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
