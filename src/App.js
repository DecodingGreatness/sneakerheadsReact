import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Men from "./pages/men";

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
