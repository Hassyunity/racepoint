import React from "react";
import "./Drivers.css"; 
import driver1 from "../assets/max.png";
import driver2 from "../assets/Iaro.png";
import driver3 from "../assets/mat.png";
import driver4 from "../assets/kimi.png";
import driver5 from "../assets/kiady.png";
import driver6 from "../assets/olivier.png";
import driver7 from "../assets/norris.png";

// images voitures
import car1 from "../assets/math.png";
import car2 from "../assets/iaro_car.png";
import car3 from "../assets/math.png";
import car4 from "../assets/kimi_car.png";
import car5 from "../assets/kiady_car.png";
import car6 from "../assets/olivier_car.png";
import car7 from "../assets/norris_car.png";

interface Driver {
  id: number;
  name: string;
  type: string;
  photo: string;
  car: string;   // <--- AJOUT
}

const drivers: Driver[] = [
  { id: 1, name: "Kimi Antonelli", type: "F1", photo: driver4, car: car4 },
  { id: 2, name: "Iaro Razanakoto", type: "GT3", photo: driver2, car: car2 },
  { id: 3, name: "Mathieu Andrianjafy", type: "Rally", photo: driver3, car: car3 },
  { id: 4, name: "Aro Kiady", type: "Rally", photo: driver5, car: car5 },
  { id: 5, name: "Max Verstappen", type: "Red Bull", photo: driver1, car: car1 },
  { id: 6, name: "Olivier", type: "Red Bull", photo: driver6, car: car6 },
  { id: 7, name: "Lando Norris", type: "Mclaren", photo: driver7, car: car7 },
  { id: 8, name: "Charles Leclerc", type: "Ferrari", photo: driver3, car: car3 },
];

const Drivers: React.FC = () => {
  return (
    <div className="drivers-container">
      <h2 className="drivers-title">Top Pilotes</h2>

      <div className="drivers-list">
        {drivers.map((driver) => (
          <div key={driver.id} className="driver-card">

            {/* Image pilote */}
            <img src={driver.photo} className="driver-photo pilot" />

            {/* Image voiture (cachée au début) */}
            <img src={driver.car} className="driver-photo car" />

            <h4 className="driver-name">{driver.name}</h4>
            <p className="driver-type">{driver.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drivers;
