// footer.tsx
import React from 'react';
import './footer.css';

// Import des logos
import launch from '../assets/launch.jpg';
import vroom from '../assets/vroom.jpg';
import mounir from '../assets/mounir.jpg';
import tagheuerLogo from '../assets/madagascar.png';
import lg from '../assets/lg.png';
import pumaLogo from '../assets/madagascar.png';
import xxl from '../assets/xxl.jpg';
import word from '../assets/word.jpg';

interface Partner {
  name: string;
  logo?: string;
}

const F1Footer: React.FC = () => {
  // Organisation des partenaires par lignes
  const partnerRows: Partner[][] = [
    // Ligne 1 - Gris foncé
    [
      { name: 'Launch Control', logo: launch },
      { name: 'Vroombox', logo: vroom },
      { name: 'Mounir PhotoGraphy', logo: mounir },
      { name: 'Launch Control', logo: launch },
      { name: 'Vroombox', logo: vroom },
      { name: 'Mounir PhotoGraphy', logo: mounir }
    ],
    // Ligne 2 - Noir
    [
      { name: 'Hassy Tsihoarana' , logo: lg },
    ],
    // Ligne 3 - Gris clair
    [
      { name: 'TAG HEUER', logo: tagheuerLogo },
      { name: 'XXL MADA', logo: xxl },
      { name: 'Word Cola', logo: word }
    ],
    // Ligne 4 - Gris moyen
    [
      { name: 'PUMA', logo: pumaLogo },
    ]
  ];

  return (
    <footer className="f1-footer">
      <h2 className="footer-title">Partenaires :</h2>
      
      <div className="partners-grid">
        {partnerRows.map((row, rowIndex) => (
          <div key={rowIndex} className="partner-row">
            {row.map((partner, partnerIndex) => (
              <div key={partnerIndex} className="partner-logo">
                {partner.logo && (
                    <img src={partner.logo} alt={partner.name} />
                )}
                <span className="partner-text">{partner.name}</span>
             </div>

            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default F1Footer;