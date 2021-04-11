import React from "react";
import ImageSection from "./component/ImageSection";
import Mouse from "./component/Mouse";
import NavBar from "./component/NavBar";
import Home from "./Home";
import "./javascript/javascrit";

function App() {
  return (
    <div className="mr-main" onContextMenu={(e) => e.preventDefault()}>
      <ImageSection />
      <Home />
      <NavBar />
      <Mouse />
    </div>
  );
}

export default App;
