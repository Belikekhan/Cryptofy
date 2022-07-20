import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import Coininfo from "./Coininfo";
import { Line } from "react-chartjs-2";

import { CryptoState } from "./Cryptoccnt";
const Coin = () => {
  const { id } = useParams();
  const [coin, setcoin] = useState();
  const { Curn, symbol } = CryptoState();

  const fecthCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setcoin(data);
    console.warn(data);
  };
  useEffect(() => {
    fecthCoin();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ borderRight: "1px gold solid", width: "50vw", height: "90vh" }}
      >
        <div
          style={{
            marginTop: "20px",
            marginLeft: "50px",
          }}
        >
          {/* sidebar */}
          <img src={coin?.image.large} height="200px" />
          <Typography variant="h3" style={{ marginTop: "20px" }}>
            {coin?.name}
          </Typography>
        </div>
        <div
          style={{
            marginTop: "20px",
            marginLeft: "50px",
            gap: "20px",
          }}
        >
          <span style={{ display: "flex" }}>
            {" "}
            <Typography variant="h5">Rank:</Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">{coin?.market_cap_rank}</Typography>
          </span>

          <span style={{ display: "flex" }}>
            {" "}
            <Typography variant="h5">Price:</Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">
              {coin?.market_data.current_price.aed}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            {" "}
            <Typography variant="h5">Price:</Typography>
            &nbsp; &nbsp;
            <Typography variant="h5">
              {coin?.market_data.market_cap.aed}
            </Typography>
          </span>
          {/* <span style={{ display: "flex" }}>
            {" "}
            <Typography variant="h5">Description:</Typography>
            &nbsp; &nbsp;
            <Typography>{coin?.description.ar.split(0, 100)}</Typography>
          </span> */}
        </div>
      </div>
      {/* chart  */}
      {/* <Line />; */}
      <Coininfo coin={coin} />
    </div>
  );
};

export default Coin;
