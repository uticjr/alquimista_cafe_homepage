import React from "react";
import { useToggle } from "../../utils/hooks";
import { cx } from "../../utils/classname";
import logo from "../../assets/logos/logo.png";

const Navbar = () => {
  const navbar = useToggle(false);

  const onClick = e => {
    window.scroll({
      top: document.getElementById(`${e.target.name}`).offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="circuito alquimista cafés" />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={navbar.toggle}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={cx("navbar-menu", { "is-active": navbar.active })}
      >
        <div className="navbar-end">
          <a className="navbar-item" name="event" href="#evento" onClick={onClick}>
            Evento
          </a>
          <a className="navbar-item" name="schedule" href="#programas" onClick={onClick}>
            Programas
          </a>
          <a className="navbar-item" name="courses" href="#cursos" onClick={onClick}>
            Cursos
          </a>
          <a className="navbar-item" name="subscription" href="#inscricoes" onClick={onClick}>
            Inscrições
          </a>
          <a className="navbar-item" name="contact" href="#contatos" onClick={onClick}>
            Contatos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
