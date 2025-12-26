import React from "react";
import "../../components/saison_info.css";

// Images pilotes et drapeaux
import iaro from "../../assets/max_iaro.png";
import veerachure from "../../assets/veerachure.png";
import george from "../../assets/george.png";

import mg from "../../assets/madagascar.png";
import th from "../../assets/thai.png";
import fr from "../../assets/france.png";

interface Driver {
  position: string;
  name: string;
  team: string;
  photo: string;
  flags: string[]; // tableau pour plusieurs drapeaux
  theme: "orange" | "blue" | "green";
  points: number;
}

const drivers: Driver[] = [
  {
    position: "1st",
    name: "Iaro Razanakoto & Sathaporn Veerachure",
    team: "B‑Quik Absolute Racing",
    photo: iaro,
    flags: [mg, th],
    theme: "green",
    points: 85
  },
  {
    position: "2nd",
    name: "Jack Brown & Marc Warren",
    team: "Optimum Motorsport",
    photo: veerachure,
    flags: [th],
    theme: "blue",
    points: 78
  },
  {
    position: "3rd",
    name: "Luca Hopkinson & Harry George",
    team: "Team XYZ",
    photo: george,
    flags: [fr, th],
    theme: "orange",
    points: 72
  },
  {
    position: "4th",
    name: "Romain Dumas & Mathieu Jaminet",
    team: "Team XYZ",
    photo: george,
    flags: [fr, th],
    theme: "orange",
    points: 68
  },
    {
        position: "5th",
        name: "Romain Dumas & Mathieu Jaminet",
        team: "Team XYZ",
        photo: george,
        flags: [fr, th],
        theme: "orange",
        points: 68
    },
];

export const GT4: React.FC = () => {
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
                <div className="season-flags">
                  {driver.flags.map((flag, idx) => (
                    <img key={idx} src={flag} className="season-flag" alt="flag" />
                  ))}
                </div>
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
                <td>
                  <div className="season-flags">
                    {driver.flags.map((flag, fidx) => (
                      <img key={fidx} src={flag} className="season-flag-table" alt="flag" />
                    ))}
                  </div>
                </td>
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

export default GT4;
