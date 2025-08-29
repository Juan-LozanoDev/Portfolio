import "../styles/Header.css";
import Logo from "../assets/Photos/JPL_Logo.png";
import { useState } from "react";
import useSelection from "../hooks/useSelection";

export default function Header() {
  const selected = useSelection()
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Juan Pablo Lozano" />
      </div>
      <div className={`hamburger ${open ? "open" :'close'}`} onClick={handleOpen}></div>
      <nav className={`navbar ${open ? "open" : ''}`}>
        <ul>
          <li>
            <a href="#root" className={selected === "Presentation" ? "active" : "desactive"}>
              Home
            </a>
          </li>
          <li>
            <a href="#AboutMe" className={selected === "AboutMe" ? "active" : "desactive"}>
              About Me
            </a>
          </li>
          <li>
            <a href="#Skills" className={selected === "Skills" ? "active" : "desactive"}>
              Skills
            </a>
          </li>
          <li>
            <a href="#Projects" className={selected === "Projects" ? "active" : "desactive"}>
              Projects
            </a>
          </li>
          <li className="contact-hamburguer">
            <a href="#ContactMe" className={selected === "ContactMe" ? "active" : "desactive"}>Contact Me</a>
          </li>
        </ul>
      </nav>
      <a href="#ContactMe" className="contactButton">
        Contact Me
      </a>
    </header>
  );
}
