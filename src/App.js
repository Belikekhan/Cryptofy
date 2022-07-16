import { Route, Routes } from "react-router-dom";
import Header from "../src/Compoenent/Header";
import Home from "../src/Compoenent/Home";
import Coin from "../src/Compoenent/Coin";
import "./App.css";

function App() {
  // const useStyles = makeStyles(() => {
  //   App: {
  //   }
  // });
  // const classes = useStyles();
  return (
    <div className="Main">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Coin />} />
      </Routes>
    </div>
  );
}

export default App;
