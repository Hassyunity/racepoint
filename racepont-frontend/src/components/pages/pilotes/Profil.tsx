import { Link } from "react-router-dom";
import "./Profil.css";

import antonili from "./data/antonili.json";
import norris from "./data/norris.json";
import lewis from "./data/lewis.json";

const drivers = [antonili, norris, lewis];
export default function Profil() {
  return (
    <div className="container">
      <header className="header">
        <h1>F1 Drivers 2025</h1>
        <p>Find the current Formula 1 drivers</p>
      </header>

      <div className="driver-grid">
        {drivers.map((driver) => (
          <Link
            key={driver.id}
            to={`/pilotes/${driver.id}`}
            className="driver-card"
            style={{ backgroundColor: driver.color }}
          >
            <div className="card-content">
              <div className="driver-info">
                <h2>{driver.firstName}</h2>
                <h3>{driver.lastName}</h3>
                <p className="team-name">{driver.team}</p>
                <span className="driver-number">{driver.number}</span>
              </div>

              <div className="driver-visual">
                <img src={driver.image} alt={driver.lastName} className="driver-img" />
                <div className="flag">{driver.countryFlag}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
