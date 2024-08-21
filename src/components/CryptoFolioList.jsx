import React, { useState } from "react";
import firtI from "../assets/img/1.png";
import secI from "../assets/img/2.png";
import thirdI from "../assets/img/3.png";
import forthI from "../assets/img/4.png";
import { useEffect } from "react";

function CryptoFolioList() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
    )
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="bg-black text-white py-8 px-4">
        <div className="containerr">
          <h1 className="text-4xl font-bold text-center mb-2">
            CRYPTOFOLIO WATCH LIST
          </h1>
          <p className="text-center text-gray-400 mb-8 text-[14px]">
            Get All The Info Regarding Your Favorite Crypto Currency
          </p>

          <div className="flex justify-around items-center overs mt-10">
            {data.map((item, index) => {
              return (
                <div key={index} className="text-center">
                  <img
                    src={item.image}
                    alt=""
                    className="ml-[110px] w-[80px] mb-3 "
                  />
                  <p>
                    ETH{" "}
                    <span
                      className={`pl-3 ${
                        item.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.price_change_percentage_24h}%
                    </span>
                  </p>
                  <p className="text-2xl font-bold">₹ 159,249.00</p>
                </div>
              );
            })}
            <div className="text-center">
              <img src={firtI} alt="" className="ml-[110px]" />
              <p>
                ETH <span className="text-green-400">+1.66%</span>
              </p>
              <p className="text-2xl font-bold">₹ 159,249.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoFolioList;
