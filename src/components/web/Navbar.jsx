import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-luxury ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container-luxury">
        
        <Link to="/" className="nav-logo-luxury">
          LEGAL<span className="logo-gold-luxury">TRACK</span>
        </Link>

        <ul className="nav-menu-luxury">
          <li><Link to="/">Inicio</Link></li>
          <li><a href="#practica">Áreas de Práctica</a></li>
          <li><a href="#firma">La Firma</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div className="nav-actions-luxury">
          <Link to="/client-portal" className="btn-luxury-solid">Portal Cliente</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
