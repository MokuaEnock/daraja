import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </header>
  );
}
