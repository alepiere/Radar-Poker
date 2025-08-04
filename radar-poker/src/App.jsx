import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import WhoWeWant from "./pages/WhoWeWant";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/whowewant">Who We Want</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to Radar Poker</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/whowewant" element={<WhoWeWant />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
