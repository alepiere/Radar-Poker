import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import About from "./pages/About";
import WhoWeWant from "./pages/WhoWeWant";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import "./App.css";
import './index.css';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#6f42c1", position: "fixed", width: "100%", top: 0, zIndex: 1000 }}>
        <div className="container">
          <NavLink 
            className="navbar-brand text-white fw-bold" 
            to="/" 
            style={{ fontSize: "1.5rem" }}
          >
            Radar Poker
          </NavLink>
          <div className="d-flex gap-4">
            {[
              { path: "/about", label: "About Us" },
              { path: "/whowewant", label: "Who We Want" },
              { path: "/testimonials", label: "Testimonials" },
              { path: "/contact", label: "Contact Us" },
            ].map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => 
                  "nav-link" + (isActive ? " active text-white fw-bold" : " text-white")
                }
                style={{ cursor: "pointer" }}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
        <main
          style={{
            backgroundColor: "#6f42c1",
            minHeight: "100vh",
            paddingTop: "70px", // space for fixed navbar
            color: "white",
            textAlign: "center",
            width: "100vw",      // full viewport width
          }}
        >
        <Routes>
          <Route
            path="/"
    element={
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 70px)" }}>
        <h1 className="display-1 fw-bold">Welcome to Radar Poker</h1>
      </div>
    }
          />
          <Route path="/about" element={<About />} />
          <Route path="/whowewant" element={<WhoWeWant />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
