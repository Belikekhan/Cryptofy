import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const Crypto = createContext();
const Cryptoccnt = ({ children }) => {
  const [Curn, setCurn] = useState("INR");
  const [symbol, setsymbol] = useState("RS");

  useEffect(() => {
    if (Curn === "INR") setsymbol("Rs");
    else if (Curn === "USD") setsymbol("$");
  }, [Curn]);
  return (
    <Crypto.Provider value={{ Curn, symbol, setCurn }}>
      {children}
    </Crypto.Provider>
  );
};

export default Cryptoccnt;

export const CryptoState = () => {
  return useContext(Crypto);
};
