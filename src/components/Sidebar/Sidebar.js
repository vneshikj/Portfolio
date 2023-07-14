import React, { Component } from "react";
import { SidebarItems } from "./SidebarItems";

class Sidebar extends Component {
  render() {
    return (
      <nav className="SidebarItems">
        <h1 className="sidebar-logo"></h1>

        <div className="mene-icon"></div>

        <ul>
          {SidebarItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
