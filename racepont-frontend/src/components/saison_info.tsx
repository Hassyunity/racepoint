import React, { useState } from "react";
import "./saison_info.css";

import { F1 } from "./drivers/F1";
import { GT4 } from "./drivers/GT4";
// import { RallyASACM } from "./drivers/RallyASACM";
// import { Slalom } from "./drivers/Slalom";

const seriesComponents: Record<string, React.FC | undefined> = {
  "F1": F1,
  "GT4": GT4,
  // "Rally ASACM": RallyASACM,
  // "Slalom": Slalom,
};

const seriesOptions = ["Rally ASACM", "F1", "GT4", "Slalom"];

export const Saison: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<"drivers" | "teams">("drivers");
  const [activeSeries, setActiveSeries] = useState<string>("F1");

  const ActiveSeriesComponent = seriesComponents[activeSeries];

  return (
    <section className="season-container">
      <div className="season-header">
        <div className="season-bar1" />
        <div className="season-bar" />
        <h1>2025 SEASON</h1>

        <div className="season-main-menu">
          <span className={activeMenu === "drivers" ? "active" : ""} onClick={() => setActiveMenu("drivers")}>Drivers</span>
          <span className={activeMenu === "teams" ? "active" : ""} onClick={() => setActiveMenu("teams")}>Teams</span>
        </div>

        <div className="season-tabs">
          {seriesOptions.map((series) => (
            <span
              key={series}
              className={activeSeries === series ? "active" : ""}
              onClick={() => setActiveSeries(series)}
            >
              {series}
            </span>
          ))}
        </div>
      </div>

      {/* Affichage du composant série actif */}
      <div>
        {ActiveSeriesComponent ? <ActiveSeriesComponent /> : <p>Serie non disponible pour le moment</p>}
      </div>
    </section>
  );
};

 export default Saison;
