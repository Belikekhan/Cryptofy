import React from "react";
import { CryptoState } from "./Cryptoccnt";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { height } from "@mui/system";

const Header = () => {
  const { Curn, setCurn } = CryptoState();
  console.log(Curn);
  return (
    <>
      <AppBar
        color="transparent"
        position="static"
        style={{
          background: "white",
          color: "black",
        }}
      >
        <Container>
          <Toolbar
            style={{
              display: "flex",
              // width: "100vw",
              justifyContent: "space-between",
            }}
          >
            <Typography
              color="primary"
              variant="contain"
              onClick={() => this.history.push("/")}
            >
              Cryptofy
            </Typography>
            <Select
              variant="outlined"
              style={{ width: "50px", height: "40px" }}
              onChange={(e) => setCurn(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
