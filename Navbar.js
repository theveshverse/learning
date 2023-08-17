import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { SidebarData } from "./NavBarData";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../assets/styles/mobile/Navbar.css";

export default function Navbar() {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        
        <div className="navbar">
          <a to="#" className="menu-bars">
            {/* <FaIcons.FaBars  className="bars" onClick={showSidebar}/>  */}
            <RxHamburgerMenu className="bars" style={{color: "#FFF !important"}} onClick={showSidebar}/>
          </a>
        </div>
        
        <div style={{opacity: sidebar ? "0.5" : "1"}}>
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum. */}
        </div>


        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <a to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </a>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <>
                <li key={index} className={item.cName}>
                  <a to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
                </>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
