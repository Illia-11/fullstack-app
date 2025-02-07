import { NavLink } from "react-router";

const Header = () => {
  return <header>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </header>
}

export default Header;