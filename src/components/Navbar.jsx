import { Link, useLocation } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Basics', path: '/basics' },
    { name: 'Branches', path: '/branches' },
    { name: 'Collaboration', path: '/collaboration' },
  ];

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <Link to="/" className="logo flex items-center gap-2">
          <Github size={32} color="var(--primary)" />
          <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--secondary)' }}>GitMaster</span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu flex gap-4">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu"
        >
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}

      <style>{`
        .navbar {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
        }
        .nav-link {
          font-weight: 600;
          color: var(--text-light);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--primary);
          background: rgba(108, 99, 255, 0.1);
        }
        .desktop-menu {
          display: flex;
        }
        .mobile-toggle {
          display: none;
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none; }
          .mobile-toggle { display: block; }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            background: white;
            padding: 1rem;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            border-bottom: 1px solid var(--border);
            box-shadow: var(--shadow);
          }
          .mobile-link {
            padding: 1rem;
            border-bottom: 1px solid var(--border);
            font-weight: 600;
            color: var(--text);
          }
          .mobile-link.active {
            color: var(--primary);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
