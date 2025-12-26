import { useParams, useNavigate } from "react-router-dom";
import "./DriverDetail.css";

import antonili from "./data/antonili.json";
import norris from "./data/norris.json";
import verstappen from "./data/lewis.json";

interface Driver {
  id: number;
  firstName: string;
  lastName: string;
  team: string;
  number: number;
  image: string;
  bioImage: string; // Nouvelle propriété
  color: string;
  bio: string;
  personal: {
    dateOfBirth: string;
    placeOfBirth: string;
  };
  stats: {
    season: {
      seasonPosition: string;
      seasonPoints: number;
      grandPrixRaces: number;
      grandPrixPoints: number;
      grandPrixWins: number;
      grandPrixPodiums: number;
    };
    career: {
      grandPrixEntered: number;
      careerPoints: number;
      highestRaceFinish: string;
    };
  };
}

const drivers: Driver[] = [
  antonili as unknown as Driver,
  norris as unknown as Driver,
  verstappen as unknown as Driver
];

export default function DriverDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const driver = drivers.find((d) => d.id.toString() === id);

  if (!driver) return <p style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Pilote introuvable</p>;

  return (
    <div className="driver-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate("/pilotes")}>← BACK TO DRIVERS</button>

        {/* HEADER */}
        <header className="driver-header">
          <div className="header-info">
            <span className="number-bg">#{driver.number}</span>
            <h1><span className="fname">{driver.firstName}</span> <span className="lname">{driver.lastName}</span></h1>
            <p className="team">{driver.team}</p>
          </div>
        </header>

        {/* STATS SECTION */}
        <section className="stats-section">
          <div className="stats-left">
            <h2 className="section-title">STATISTICS</h2>
            <h3 className="season-title">2025 SEASON</h3>
            <div className="stats-grid">
              <div className="stat-item"><span>Season Position</span><strong>{driver.stats.season.seasonPosition}</strong></div>
              <div className="stat-item"><span>Season Points</span><strong>{driver.stats.season.seasonPoints}</strong></div>
              <div className="stat-item"><span>Grand Prix Races</span><strong>{driver.stats.season.grandPrixRaces}</strong></div>
              <div className="stat-item"><span>Grand Prix Points</span><strong>{driver.stats.season.grandPrixPoints}</strong></div>
              <div className="stat-item"><span>Grand Prix Wins</span><strong>{driver.stats.season.grandPrixWins}</strong></div>
              <div className="stat-item"><span>Grand Prix Podiums</span><strong>{driver.stats.season.grandPrixPodiums}</strong></div>
            </div>
          </div>
          <aside className="career-aside">
            <div className="career-card">
              <h3>CAREER STATS</h3>
              <div className="career-row"><span>Grand Prix Entered</span><strong>{driver.stats.career.grandPrixEntered}</strong></div>
              <div className="career-row"><span>Career Points</span><strong>{driver.stats.career.careerPoints}</strong></div>
              <div className="career-row"><span>Highest Race Finish</span><strong>{driver.stats.career.highestRaceFinish}</strong></div>
            </div>
          </aside>
        </section>

        {/* BIOGRAPHY SECTION */}
        <section className="bio-section">
          <h2 className="section-title">BIOGRAPHY</h2>
          
          <div className="bio-header-info">
            <div className="personal-item">
              <span className="label">Date of Birth</span>
              <span className="value">{driver.personal.dateOfBirth}</span>
            </div>
            <div className="personal-item">
              <span className="label">Place of Birth</span>
              <span className="value">{driver.personal.placeOfBirth}</span>
            </div>
          </div>

          <div className="bio-content-container">
            <div className="bio-image-wrapper">
                {/* Photo du pilote à gauche */}
                <img src={driver.bioImage} alt={driver.lastName} className="bio-photo" />
                {/* Motif en arrière-plan */}
                <div className="bio-image-pattern"></div>
            </div>
            <div className="bio-text">
              <p>{driver.bio}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}