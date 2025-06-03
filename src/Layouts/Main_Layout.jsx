import React from "react";
import { Outlet } from "react-router-dom";
import Announcement from "../Components/Fixed/Announcement";
import Navbar from "../Components/Fixed/Navbar";
import Extranav from "../Components/Fixed/Extranav";
import Footer from "../Components/Fixed/Footer";
function Main_Layout() {
  return (
    <section>
      <div>
        <div>
          <Announcement />
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <Extranav />
        </div>
        <Outlet />
        <div>
          <Footer/>
        </div>
      </div>
    </section>
  );
}

export default Main_Layout;
