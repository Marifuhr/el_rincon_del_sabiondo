//import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; // Replace with the actual library you're using
// import { Button } from "react-bootstrap";
import style from '../Login/Login.module.css';
import { clearStorageCart } from "../../Redux/Action/Index";

const LogoutButton = () => {
  const { logout } = useAuth0();
  
  const handleLogout = () => {
    clearStorageCart();
    logout({returnTo: window.location.origin})
  };

  return (
<button onClick={handleLogout} className={style.btn}>
      Logout
    </button>
  );
};

export default LogoutButton;
