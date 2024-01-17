import React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import Card from "../../components/Card/cards";
function Index() {
  return (
    <div>
      <div style={{ position: "relative" }} className="home-container">
        <Navbar />
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
