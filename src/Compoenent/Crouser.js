import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "./Cryptoccnt";
import AlicCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

export function NumberComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Crouser = () => {
  const [tranding, settranding] = useState([]);
  const { Curn, symbol } = CryptoState();
  const Fetch = async () => {
    const { data } = await axios.get(TrendingCoins(Curn)).catch((err) => {
      console.log(err);
    });
    settranding(data);
  };
  // console.log(tranding);
  useEffect(() => {
    Fetch();
  }, [Curn]);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  const item = tranding.map((coin) => {
    let profit = coin.market_cap_change_percentage_24h >= 0;
    return (
      <Link className="itemlink" to={`/coins/${coin.id}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            flexDirection: "column",
          }}
        >
          <img src={coin?.image} height="80" />
          <span style={{ textTransform: "capitalize" }}>{coin?.symbol}</span>
          {/* &nbsp; */}
          <span>
            {profit && "+"}
            {coin?.market_cap_change_percentage_24h.toFixed(2)}
          </span>
          <span>
            {symbol} &nbsp;
            {NumberComma(coin?.current_price)}
          </span>
        </div>
      </Link>
    );
  });
  return (
    <div style={{ width: "100vw", marginTop: "20px" }}>
      <AlicCarousel
        mouseTracking
        infinite={true}
        autoPlayInterval={1000}
        animationDuration={5000}
        responsive={responsive}
        buttonsDisabled={true}
        autoPlay={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        disableAutoPlayOnAction={true}
        items={item}
      />
    </div>
  );
};

export default Crouser;
