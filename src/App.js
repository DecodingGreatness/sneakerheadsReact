import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <h1>Hello</h1>
    </Router>
  );
}

export default App;
