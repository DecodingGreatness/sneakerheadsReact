import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Home" element={<Home />} />
        <Route path="/Men" element={<Men />} />
      </Routes>
    </Router>
  );
}

export default App;
