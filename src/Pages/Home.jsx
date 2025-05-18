import React from "react";
import Announcement from "../Components/Fixed/Announcement";
import Navbar from "../Components/Fixed/Navbar";
import Extranav from "../Components/Fixed/Extranav";
import Hero from "../Components/Fixed/Hero";
import Offers from "../Components/Fixed/Offers";
import Banners from "../Components/Fixed/Banners";
import ExtraAds from "../Components/Fixed/ExtraAds";
import Discount from "../Components/Fixed/Disxount";

function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Offers />
      </div>
      <div>
        <Banners />
      </div>
      <div>
        <ExtraAds />
      </div>
      <div>
        <Discount />
      </div>
    </div>
  );
}

export default Home;
