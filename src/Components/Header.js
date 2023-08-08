import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "./Nav";
import "./Header.css";
import Logo from "../Assets/Logo.svg";

export default function Header() {
  return (
    <header>
        <Link to={"/"}>
        <img src={Logo} alt="logo" width={250} />
        </Link>
      <NavBar />
    </header>
  );
}
