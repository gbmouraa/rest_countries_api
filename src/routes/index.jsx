import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CoutryPage from "../Pages/CoutryPage";

export default function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/coutry/:coutryName" element={<CoutryPage />} />
      </Routes>
    </div>
  );
}
