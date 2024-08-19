import React from "react";
import firtI from "../assets/img/1.png";
import secI from "../assets/img/2.png";
import thirdI from "../assets/img/3.png";
import forthI from "../assets/img/4.png";
function CryptoFolioList() {
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
            <div className="text-center">
            <img src={firtI} alt="" className="ml-[110px]" />
              <p>
                ETH <span className="text-green-400">+1.66%</span>
              </p>
              <p className="text-2xl font-bold">₹ 159,249.00</p>
            </div>
            <div className="text-center">
            <img src={secI} alt="" className="ml-[110px]" />
              
              <p>
                XRP <span className="text-green-400">+3.21%</span>
              </p>
              <p className="text-2xl font-bold">₹ 58.08</p>
            </div>
            <div className="text-center">
            <img src={thirdI} alt="" className="ml-[110px]" />

              <p>
                SOL <span className="text-green-400">+2.45%</span>
              </p>
              <p className="text-2xl font-bold">₹ 3,730.92</p>
            </div>
            <div className="text-center">
            <img src={forthI} alt="" className="ml-[110px]" />

              <p>
                BNB <span className="text-green-400">+1.68%</span>
              </p>
              <p className="text-2xl font-bold">₹ 20,780.00</p>
            </div>
            <div className="text-center">
            <img src={firtI} alt="" className="ml-[110px]" />

              <p>
                BNB <span className="text-green-400">+1.68%</span>
              </p>
              <p className="text-2xl font-bold">₹ 20,780.00</p>
            </div>
            <div className="text-center">
            <img src={secI} alt="" className="ml-[110px]" />

              <p>
                BNB <span className="text-green-400">+1.68%</span>
              </p>
              <p className="text-2xl font-bold">₹ 20,780.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoFolioList;
