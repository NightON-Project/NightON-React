import React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
function Index() {
  return (
    <div>
      <div style={{ position: "relative" }} className="home-container">
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
