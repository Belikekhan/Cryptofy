import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import axios from "axios";
import { CryptoState } from "./Cryptoccnt";
import { Container } from "@mui/system";
import {
  LinearProgress,
  TableContainer,
  TableHead,
  TextField,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CoinTable = () => {
  const [page, setpage] = useState(1);
  const [coins, setcoins] = useState([]);
  const [load, setload] = useState(false);
  const [search, setsearch] = useState("");
  const { Curn } = CryptoState();
  const navigate = useNavigate();

  const fecthCoin = async () => {
    setload(true);
    const { data } = await axios.get(CoinList(Curn)).catch((err) => {
      console.log("Error", err);
    });
    setcoins(data);
    setload(false);
  };
  console.log(coins);
  useEffect(() => {
    fecthCoin();
  }, [Curn]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography styel={{ margin: "18", marginTop: "20px" }}>
        Cryptocurrency Prices Market Cap
      </Typography>
      <TextField
        label="Search the Cryptocoin here"
        variant="outlined"
        // color="white"
        style={{
          marginBottom: "15px",
          width: "100%",
          border: "1px solid white",
          // color: "white",
          background: "white",
        }}
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      />
      <TableContainer>
        {load ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table>
            <TableHead style={{ background: "gold" }}>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    style={{ color: "black", fontWeight: "700" }}
                    key={head}
                  >
                    {head}
                  </TableCell>
                ))}{" "}
              </TableRow>
            </TableHead>
            <TableBody>
              {handleSearch()
                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                .map((row, i) => {
                  const profit = row.price_change_percentage_24h > 0;

                  return (
                    <TableRow
                      oClick={() => navigate(`/coins/${row.id}`)}
                      key={row.name}
                      style={{ background: "black", color: "white" }}
                    >
                      <TableCell
                        comoponent="th"
                        scop="row"
                        style={{ display: "flex", gap: "15", color: "white" }}
                      >
                        <div
                          styel={{
                            display: "flex",
                            flexDirection: "colomn",
                            gap: "20px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "centr",
                              gap: "20px",
                            }}
                          >
                            {" "}
                            <img
                              src={row?.image}
                              style={{ height: "40px", width: "40px" }}
                            />
                            <span
                              style={{
                                fontWeight: "bold",

                                textTransform: "uppercase",
                                fontSize: "30px",
                              }}
                            >
                              {" "}
                              {row?.symbol}
                            </span>
                          </div>
                          <div style={{ marginTop: "5px" }}>
                            <span styel={{ color: "grey", fontSize: "10px" }}>
                              {row?.name}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          background: "black",
                        }}
                      >
                        {row?.current_price}$
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          background: "black",
                        }}
                      >
                        {row?.market_cap_change_percentage_24h}$
                      </TableCell>

                      <TableCell
                        style={{
                          color: "white",
                          background: "black",
                        }}
                      >
                        {row?.market_cap} $
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <Pagination count={(handleSearch()?.length / 10).toFixed(0)} />
    </Container>
  );
};

export default CoinTable;
