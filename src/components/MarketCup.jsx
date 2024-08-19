import React, { useState, useEffect } from "react";
import firstI from "../assets/img/1.png";
import secI from "../assets/img/2.png";
import thirdI from "../assets/img/3.png";
import forthI from "../assets/img/4.png";

const MarketCup = () => {
    const [search, setSearh] = useState("")
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Example value; can be adjusted based on API response

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page) => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-transparent p-4 rounded-lg containerr">
      <h1 className="text-2xl text-center text-white mb-4">
        Cryptocurrency Prices by Market Cap
      </h1>
      <div className="flex justify-center mb-4">
        <input
        onChange={(e) => setSearh(e.target.value)}
          type="text"
          placeholder="Search For a Crypto Currency..."
          className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
        />
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-blue-400 text-white">
            <p className="p-2 text-black coun">Coin</p>
            <th className="pl-[140px] text-black">Price</th>
            <th className="p-2 text-black">24h Change</th>
            <th className="p-2 text-black">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((item) => {
            return item.symbol.toLowerCase().includes(search.toLowerCase());
          }).map((item, index) => (
            <tr key={index} className="text-white border-b border-gray-800">
              <td className="p-2 flex items-center">
                <img className="w-[50px] h-[50px]" src={item.image} alt={item.name} />
                <p className="ml-2 text-2xl m-6 ">{item.symbol.toUpperCase()}</p>
                <p className="absolute mt-[40px] ml-[60px] text-gray-400 text-[12px]">{item.name}</p>
              </td>
              <td className="pl-[290px]">₹{item.current_price}</td>
              <td className={`pl-20 ${item.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.price_change_percentage_24h}%
              </td>
              <td className="pl-20">₹{item.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mx-2 text-white bg-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          &lt;-- Back
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 text-white bg-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next --&gt;
        </button>
      </div>
    </div>
  );
};

export default MarketCup;
