import React from "react";
import "./styled.css";

const NavResponsive = () => {
  return (
    <div className="container">
      <input className="inputHamburger" type="checkbox" id="menu-hamburger" />

      <label className="labelHamburger" htmlFor="menu-hamburger">
        <div className="menu">
          <span className="hamburger"></span>
        </div>
      </label>

      <ul className="ul2">
        <li className="father1">
          <a
            href="https://www.canva.com/design/DAFxLz7yVt4/5O8eYzwjOEoBkL14Azok_Q/view?utm_content=DAFxLz7yVt4&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
          >
            Curriculo
          </a>
        </li>
        <li className="father1">
          <a className="children1" href="#">
            Projetos Backend
          </a>
          <div className="dropdown1">
            <a
              href="https://movieflix-api.vercel.app/docs"
              target="_blank"
            >
              API/Pg
            </a>
            <a
              href="https://movieflix-api-v-orm.vercel.app/docs/"
              target="_blank"
            >
              API/Prisma
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavResponsive;
