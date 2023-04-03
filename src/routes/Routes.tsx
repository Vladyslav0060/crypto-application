import { Routes, Route } from "react-router-dom";
import Chart from "../components/pages/Chart";
import CoinInfo from "../components/pages/CoinList/CoinInfo";
import CoinList from "../components/pages/CoinList/CoinList";
import Exchange from "../components/pages/Exchange/Exchange";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/home" element={<CoinList />} /> */}
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/coins" element={<CoinList />} />
      <Route path="/coins/:id" element={<CoinInfo />} />
      <Route path="/charts" element={<Chart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<CoinList />} />
    </Routes>
  );
};
export default AppRoutes;
