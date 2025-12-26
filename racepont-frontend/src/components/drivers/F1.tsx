import React from "react";
import "../../components/saison_info.css";

// images pilotes et drapeaux
import norris from "../../assets/norris.avif";
import verstappen from "../../assets/max.avif";
import piastri from "../../assets/piastri.avif";

import uk from "../../assets/united-kingdom.png";
import nl from "../../assets/netherlands.png";
import au from "../../assets/australia.png";

interface Driver {
  position: string;
  name: string;
  team: string;
  photo: string;
  flag: string;
  theme: "orange" | "blue" | "green";
  points: number;
}

const drivers: Driver[] = [
  { position: "1st", name: "Lando Norris", team: "McLaren", photo: norris, flag: uk, theme: "green", points: 423 },
  { position: "2nd", name: "Max Verstappen", team: "Red Bull Racing", photo: verstappen, flag: nl, theme: "blue", points: 421 },
  { position: "3rd", name: "Oscar Piastri", team: "McLaren", photo: piastri, flag: au, theme: "orange", points: 410 },
  { position: "4th", name: "Lewis Hamilton", team: "Mercedes", photo: verstappen, flag: uk, theme: "blue", points: 395 },
  { position: "5th", name: "Charles Leclerc", team: "Ferrari", photo: piastri, flag: au, theme: "orange", points: 387 },
  { position: "6th", name: "George Russell", team: "Mercedes", photo: verstappen, flag: uk, theme:"blue" , points: 360 },
];

export const F1: React.FC = () => {
  const podiumOrder = [drivers[1], drivers[0], drivers[2]];

  return (
    <div>
      {/* PODIUM */}
      <div className="season-podium">
        {podiumOrder.map((driver) => {
          const positionIndex =
            driver.position === "1st" ? 1 :
            driver.position === "2nd" ? 2 : 3;

          return (
            <div key={driver.name} className={`season-card ${driver.theme} pos-${positionIndex}`}>
              <div className="season-rank">{driver.position}</div>
              <div className="season-info">
                <h3>{driver.name}</h3>
                <p>{driver.team}</p>
                <img src={driver.flag} className="season-flag" alt="flag" />
              </div>
              <img src={driver.photo} className="season-driver-photo" alt={driver.name} />
            </div>
          );
        })}
      </div>

      {/* TABLEAU */}
      <div className="season-table-container">
        <table className="season-table">
          <thead>
            <tr>
              <th>Pos.</th>
              <th>Driver</th>
              <th>Nationality</th>
              <th>Team</th>
              <th>Pts.</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, idx) => (
              <tr key={idx}>
                <td>{driver.position}</td>
                <td>{driver.name}</td>
                <td><img src={driver.flag} className="season-flag-table" alt="flag" /></td>
                <td>{driver.team}</td>
                <td>{driver.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default F1;
