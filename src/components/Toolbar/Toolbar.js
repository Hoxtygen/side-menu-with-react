import React from "react";
import "./Toolbar.css";
import { DrawerToggleButton } from "../SideDrawer/DrawerToggleButton";

export const Toolbar = props => {
  return (
    <header className = "toolbar">
      <nav className = "toolbar__navigation">
          
          <div className="toolbar__logo"><a href="/">Company logo</a></div>
          <div className="spacer"/>
          <div className = "toolbar__navigation-items">
          {/* <div style = {{color: "black"}}>X-Men</div> */}
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Products</a></li>
                  <li><a href="/">Users</a></li>
              </ul>
          </div>
          <div className = "toolbar__toggle-button">
            <DrawerToggleButton 
              click = {props.drawerClickHandler}
            />
          </div>
      </nav>
    </header>
  );
};
