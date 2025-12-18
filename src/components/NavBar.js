import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/images/logo.png';

function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Glow & Grace Logo"
            className="nav-icon"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </Link>

        <Link to="/" className="nav-title" onClick={() => setOpen(false)}>
          Glow & Grace Beauty
        </Link>
      </div>

      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Shop" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/SkinQuiz" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>
            Skin Quiz
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
