import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Landing from "./Landing";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Main />} path="/" />
        <Route element={<Landing />} path="/landing" />
        <Route element={<Signup />} path="/signup" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
