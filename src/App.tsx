import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";


function App() {


  return (
    <div className="app">
      <Router>
        <NavBar />
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tops" element={<Home />} />
          <Route path="/bottoms" element={<Home />} />
          <Route path="/shoes" element={<Home />} />
          <Route path="/accessories" element={<Home />} />
        </Routes>
        
      </Router>
    </ div>
  );
}

export default App;
