import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Men from "./pages/men";
import Female from "./pages/female";
import Favorites from "./pages/favorites";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Home" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Female" element={<Female />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
