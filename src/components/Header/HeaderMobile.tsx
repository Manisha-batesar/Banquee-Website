import { useState } from 'react';
import './Header.css'
export const HeaderMobile = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   
 return (
    <div style={{position: 'relative'}}>
      <header className="mobile-header">
        <h1 className="mobile-logo">banquee.</h1>

        <div className="mobile-buttons">
          <button className="login-btn">Login</button>
          <button className="open-btn">Register</button>
          <button className="menu-toggle" style={{width: 35}} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </header>

        <nav className="mobile-nav" style={{display: menuOpen ? 'block' : 'none'}}>
          <ul className="mobile-items">
            <li><a href="#features">Features</a></li>
            <li><a href="#compare">Compare</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
    </div>
  );
};

