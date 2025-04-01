import React from "react";
import logo from "../assets/logo_.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            alt="logo"
            className="mx-0"
            width={50}
            height={50}
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/nerea-hebles-molina/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nereahm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:molinahebles@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enviar correo"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
