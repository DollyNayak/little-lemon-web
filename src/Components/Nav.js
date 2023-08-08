import React from "react";
import "./Nav.css";


const links = [
  { link: "Home", url: "/" },
  { link: "About", url: "/under-construction" },
  { link: "Menu", url: "/under-construction" },
  { link: "Reservations", url: "/reservations" },
  { link: "Order Online", url: "/under-construction" },
  { link: "Login", url: "/under-construction" },
];

export default function Navbar(props) {
  return (
    <nav>
      <ul>
        {links.map((item) => (
          <ul>
            <li style={{ listStyle: "none"}}>
              <a style={{textDecoration: "none"}}href={item.url}>{item.link}</a>
            </li>
          </ul>
        ))}
      </ul>
    </nav>

  );
}
