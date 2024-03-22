import { useState } from "react";
import './Menu.css'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";



function Menu() {
    const [hide, setHide] = useState(true)
    
    const handleHide =() => {
        setHide(!hide)
    }


  return (
    <>
    <FaBars className="icon" onClick={handleHide}/>
    <SideMenu show={hide} handleHide={handleHide}/>
    </>
  );
}

function SideMenu({handleHide,show}){
  return (
      <div class={show.toString()}>
        <div>
          <h2 className=" ">Asombro</h2>
          <IoCloseSharp/>
        </div>
      <ul>
        <li className="">menu</li>
      </ul>
    </div>
  )
}




export default Menu;