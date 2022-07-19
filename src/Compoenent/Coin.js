import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import Coininfo from "./Coininfo";

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
    <div>
      <div>
        {/* sidebar */}
        <img src={coin?.image.large} height="200px" />
        <Typography variant="h3">{coin?.name}</Typography>
      </div>
      <div>
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
      </div>
      {/* chart  */}
      <Coininfo coin={coin} />
    </div>
  );
};

export default Coin;
