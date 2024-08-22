import React from "react";
import CryptoFolioList from "../components/CryptoFolioList";
import { Link } from "react-router-dom";
import MarketCup from "../components/MarketCup";
import Navbar from "../components/Navbar";
function Home() {
 
  return (
    <div className="">
        <Navbar/>
      <CryptoFolioList />
      <MarketCup/>
    </div>
  );
}

export default Home;


