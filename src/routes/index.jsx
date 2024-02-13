import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

export default function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
