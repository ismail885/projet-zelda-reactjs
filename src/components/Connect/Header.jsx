import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        {isAuthenticated && <Link to="/products">Products</Link>}
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </nav>
    </header>
  );
};

export default Header;