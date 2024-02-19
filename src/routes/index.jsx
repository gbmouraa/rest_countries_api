import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CoutryInfo from "../Pages/CoutryInfo";

export default function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/coutry/:coutryName" element={<CoutryInfo />} />
      </Routes>
    </div>
  );
}
