

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Navbar from "../components/Navbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Details = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState({});

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, [id]);
  
  const navigate = useNavigate()
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const prices = data.prices.map((item) => item[1]);
        setCryptoData(prices);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const data = {
    labels: cryptoData ? Array(cryptoData.length).fill("") : [],
    datasets: [
      {
        label: "Price (Past 1 Day) in USD",
        data: cryptoData || [],
        borderColor: "#00aaff",
        backgroundColor: "rgba(0, 170, 255, 0.1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Price (USD)",
        },
        ticks: {
          callback: function (value) {
            return new Intl.NumberFormat("en-US", {
              maximumSignificantDigits: 3,
            }).format(value);
          },
        },
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col container mx-auto  md:flex-row p-6 bg-[#1A1B1F] text-white h-screen">
        <div className="flex flex-col containerr md:w-1/3 p-6">
          <img src={datas.image?.large} alt={datas.name} className="w-[200px] mb-4" />
          <h1 className="text-4xl font-bold mb-4">{datas.name}</h1>
          <p className="text-lg mb-4 text-gray-300">{datas.description?.en.split(".")[0]}</p>
          <p className="text-xl font-semibold mb-2">Rank: {datas.market_cap_rank}</p>
          <p className="text-xl font-semibold mb-2">Current Price: <span className="text-blue-700">{datas.market_data?.current_price?.usd}</span> $</p>
          <p className="text-xl font-semibold">Market Cap: <span className="text-blue-700">${datas.market_data?.market_cap?.usd}</span> </p>
          <button onClick={() => navigate("/")} className="w-[150px] rounded mt-10 h-[30px] bg-lime-500">Home page</button>
        </div>
        <div className=" w-[1100px] mt-10 p-4">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default Details;
