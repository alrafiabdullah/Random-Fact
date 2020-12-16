import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <p>
        Developed By:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alrafiabdullah/"
        >
          Abdullah Al Rafi
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alrafiabdullah/Random-Fact.git"
        >
          <FaGithub size={30} /> <FaExternalLinkAlt size={20} />
        </a>
      </p>
    </div>
  );
}

export default Footer;
