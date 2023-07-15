import React, { Component } from "react";
import { SidebarItems } from "./SidebarItems";
import "../Sidebar/Sidebar.css";
import { scrollToFunction } from "../../Utilities";

class Sidebar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="SidebarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
          {SidebarItems.map((item, index) => {
            return (
              <li key={index} className="link-container">
                {item.id ? (
                  <a
                    className={item.cName}
                    onClick={() => scrollToFunction(item.id)}
                  >
                    {item.title}
                  </a>
                ) : (
                  <a className={item.cName} href={item.url} target="_blank">
                    {item.title}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
