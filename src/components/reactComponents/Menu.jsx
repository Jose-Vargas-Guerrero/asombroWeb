import { useState } from "react";
import "./Menu.css";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Menu() {
  const [hide, setHide] = useState(true);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <>
      {hide ? (
        <FaBars className="icon" onClick={handleHide} />
      ) : (
        <SideMenu show={hide} handleHide={handleHide} />
      )}
    </>
  );
}

function SideMenu({ handleHide, show }) {
  return (
    <div className={show.toString()}>
      <div className="header">
        <h2 className=" ">Asombro</h2>
        <IoCloseSharp onClick={handleHide} />
      </div>
      <ul className="links-container">
        <a className="link" href="#hero" onClick={handleHide}>
          Inicio
        </a>
        <a className="link" href="#QuienesSomos" onClick={handleHide}>
          Quienes somos
        </a>
        <a className="link" href="#AsombroCreativo" onClick={handleHide}>
          Asombro Creativo
        </a>
        <a className="link" href="#marcas" onClick={handleHide}>
          Marcas
        </a>
        <a className="link" href="#servicios" onClick={handleHide}>
          Servicios
        </a>
        <a className="link" href="#contactenos" onClick={handleHide}>
          Contacto
        </a>
      </ul>
      <div className="icons-container">
        <a href="https://www.instagram.com/asombrohn/" target="_blank">
          <BsInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com/asombrohn/?locale=es_LA" target="_blank">
          <FaFacebook className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Menu;
