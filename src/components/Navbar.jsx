import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
        const scrollPosition = window.scrollY + 180;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { label: 'About', anchor: '#about' },
    { label: 'Skills', anchor: '#skills' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'Experience', anchor: '#experience' },
    { label: 'Contact', anchor: '#contact' }
  ];

  const handleNavClick = (e, anchor) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const target = document.querySelector(anchor);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + anchor);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className={`app-navbar ${scrolled ? 'app-navbar-scrolled' : ''}`}>
      <div className="container app-navbar-container">
        
        {/* Brand Monogram */}
        <a href="/" className="navbar-brand" onClick={handleLogoClick}>
          <div className="brand-logo-icon">
            <Code2 size={20} />
          </div>
          <div className="brand-title-wrap">
            <span className="brand-name">Kishan Patel</span>
            <span className="brand-role">MERN Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-navbar-nav">
          <ul className="navbar-links-list">
            {navLinks.map((link) => (
              <li key={link.anchor}>
                <a
                  href={link.anchor}
                  className={`navbar-link ${activeSection === link.anchor.substring(1) ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.anchor)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="navbar-right-actions">
          <a
            href="#contact"
            className="btn btn-primary btn-sm navbar-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="container mobile-nav-inner">
            {navLinks.map((link) => (
              <a
                key={link.anchor}
                href={link.anchor}
                className={`mobile-nav-item ${activeSection === link.anchor.substring(1) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.anchor)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary btn-sm mobile-nav-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
