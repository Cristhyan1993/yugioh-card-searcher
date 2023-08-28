import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="credit">
        <p>
          Created & styled by{" "}
          <a
            href="https://github.com/Cristhyan1993"
            target="_blank"
            rel="noreferrer"
          >
            Cris
          </a>
        </p>
        <p>
          Yu-Gi-Oh! Card searcher 2023 - data fetched from{" "}
          <a
            href="https://ygoprodeck.com/api-guide/"
            target="_blank"
            rel="noreferrer"
          >
            ygoprodeck api
          </a>
        </p>
      </div>
      <div className="footer-grid-container">
        <div className="contact">
          About me
          <div className="links">
          <ul className="links">
          <li><a href="https://github.com/Cristhyan1993">
              Github <i class="fa-brands fa-github"></i>
            </a></li>
            <li>
            <a href="https://www.linkedin.com/in/criscalderon/">
              LinkedIn <i class="fa-brands fa-linkedin"></i>
            </a></li></ul>
          </div>
        </div>
        <div className="other-project">
          Check out my other project
          <div className="links">
            <a href="https://cris-trailerz.netlify.app/">
              Trailerz <i class="fa-solid fa-film"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
