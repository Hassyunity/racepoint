// store.tsx
import React from 'react';
import './store.css';

interface NavItem {
  title: string;
  href: string;
}

const F1Store: React.FC = () => {
  const navItems: NavItem[] = [
    { title: 'F1® Petronas Store', href: '#unlocked' },
    { title: 'GT4® STORE', href: '#store' },
    { title: 'F1® TICKETS', href: '#tickets' },
    { title: 'F1® FANTASY', href: '#fantasy' }
  ];

  return (
    <div className="f1-nav-container">
      <nav className="f1-nav">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="f1-nav-button"
          >
            <span className="f1-nav-text">{item.title}</span>
            <svg 
              className="f1-nav-icon"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default F1Store;