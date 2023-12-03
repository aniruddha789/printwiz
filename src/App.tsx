import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";
import img1 from "./assets/300952867OFFWHITE_1.webp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";


function App() {


  return (
    <div className="app">
      <Router>
        <NavBar className = "nav"/>
   
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
