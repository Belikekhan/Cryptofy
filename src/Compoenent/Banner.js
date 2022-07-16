import { Typography } from "@mui/material";
import React from "react";
import "../App.css";
import Crouser from "./Crouser";

const Banner = () => {
  return (
    <div className="Banner">
      <Typography
        variant="h2"
        style={{ marginBottom: "20px", fontWeight: "bold" }}
      >
        Cyptofy
      </Typography>
      <Typography variant="subtitle2">
        All in one platform for primary people{" "}
      </Typography>
      <Crouser className="Crouser" />
    </div>
  );
};

export default Banner;
