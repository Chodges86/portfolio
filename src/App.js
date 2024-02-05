import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SocialsBar from "./components/SocialsBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SocialsBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
