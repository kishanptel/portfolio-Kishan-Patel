import { ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="modern-footer">
      <div className="container modern-footer-container">

        <div className="footer-left-info">
          <div className="footer-brand-tag">
            <Code2 size={16} className="footer-brand-icon" />
            <span className="footer-brand-text">{personalInfo.name}</span>
          </div>
          <p className="footer-role-text">
            MERN Stack Developer &bull; Surat, Gujarat, India
          </p>
        </div>

        <div className="footer-right-actions">
          <p className="footer-copyright-text">
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
