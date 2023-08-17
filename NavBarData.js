import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Menu 1",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Menu 2",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Menu 3",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Menu 4",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Menu 5",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
