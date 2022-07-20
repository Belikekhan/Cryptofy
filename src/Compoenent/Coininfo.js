import React, { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { CryptoState } from "./Cryptoccnt";
import axios from "axios";
import { Line } from "react-chartjs-2";

const Coininfo = ({ coin }) => {
  console.log(coin);
  const [history, sethistory] = useState();
  const [days, setday] = useState(1);

  const { Curn } = CryptoState();

  const FethHistory = async () => {
    const { data } = axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=${Curn}&days=${days}`
        .then((data) => sethistory(data))
        .console.log(history)
    );
  };
  useEffect(() => {
    FethHistory();
  }, [Curn, days]);

  return <div>{/* <Line data={label} /> */}</div>;
};

export default Coininfo;
