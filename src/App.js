import React, { useState} from "react";
import "./App.css";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { SideDrawer } from "./components/SideDrawer/SideDrawer";
import { Backdrop } from "./components/Backdrop/Backdrop";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => !prevState)
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }


  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click = {backdropClickHandler}/>
  }
  
  return (
    <div style = {{height: "100%"}}>
      <Toolbar 
        drawerClickHandler = {drawerToggleClickHandler}
      />
      <SideDrawer show = {sideDrawerOpen}/>
      { backdrop }
      <main style = {{marginTop: "64px"}}>
        <p>I am the page content.</p>
      </main>
    </div>
  );
}

export default App;
