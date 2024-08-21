import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
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
    const [cryptoData, setCryptoData] = useState(null);
    useEffect(() => {
      fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1")
        .then((response) => response.json())
        .then((data) => {
          const prices = data.prices.map(item => item[1])
          setCryptoData(prices)
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const data = {
      labels: cryptoData ? Array(cryptoData.length).fill('') : [],
      datasets: [
        {
          label: 'Price (Past 1 Day) in USD',
          data: cryptoData || [],
          borderColor: '#00aaff',
          backgroundColor: 'rgba(0, 170, 255, 0.1)',
          borderWidth: 2,
        },
      ],
    };
const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Time'
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Price (USD)'
          },
          ticks: {
            callback: function (value) {
              return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(value);
            },
          },
        },
      },
    };

    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
};

export default Details;
