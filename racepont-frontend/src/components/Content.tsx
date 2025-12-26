import { useState } from "react";
import heroImage from "../assets/link.jpg";
import heroImageHover from "../assets/Iaro.jpg";
import Drivers from "./Drivers";
import Saison_info from "./saison_info";
import Store from "./store";
import Footer from "./footer";
import "../App.css";

export default function Content() {
  const champion = "Iaro Razanakoto";
  const [hovered, setHovered] = useState(false);

  return (
    <>
    <div className="content">
      <header className="hero">
        <img
          src={hovered ? heroImageHover : heroImage}
          alt="Course Urbaine"
          className="hero-image"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <div className="hero-text">
          <h3>{champion} 🏆</h3>
        </div>
        <div className="photo-credit">
          Pic: <span className="credit-name">LaunchControl</span>
        </div>
      </header>
    </div>

      <Drivers />
      <Saison_info />
      <Store />
      <Footer />
    </>
  );
}
