import React, { Component } from "react";
import { SidebarItems } from "./SidebarItems";
import "../Sidebar/Sidebar.css";

class Sidebar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav className="SidebarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

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
