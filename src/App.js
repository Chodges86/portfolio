import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SocialsBar from "./components/SocialsBar";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <SocialsBar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </HelmetProvider>
    </div>
  );
}

export default App;
