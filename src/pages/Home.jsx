import React from "react";
import CryptoFolioList from "../components/CryptoFolioList";
import { Link } from "react-router-dom";
import MarketCup from "../components/MarketCup";
function Home() {
  return (
    <div className="">
        
      <CryptoFolioList />
      <MarketCup/>
    </div>
  );
}

export default Home;
