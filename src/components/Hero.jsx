import { ArrowDown, Mail, Phone, ExternalLink, Sparkles, Code, CheckCircle2, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero({ onCopy }) {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-modern-section">
      <div className="container hero-modern-container">
        
        {/* Availability Badge */}
        <div className="hero-status-pill" data-aos="fade-down" data-aos-duration="600">
          <span className="status-indicator-dot" />
          <span>Available for Full-Time Roles &amp; High-Impact Projects</span>
        </div>

        {/* Main Headline */}
        <div className="hero-title-group" data-aos="fade-up" data-aos-delay="100">
          <h1 className="hero-modern-title">
            Hi, I'm <span className="hero-accent-name">{personalInfo.name}</span>
          </h1>
          <h2 className="hero-role-headline">
            MERN Stack Developer
          </h2>
        </div>

        {/* Narrative Summary */}
        <p className="hero-modern-summary" data-aos="fade-up" data-aos-delay="200">
          {personalInfo.summary}
        </p>

        {/* Key Quick Stats */}
        <div className="hero-pills-row" data-aos="fade-up" data-aos-delay="300">
          <div className="hero-stat-pill">
            <Code size={15} className="pill-cyan-icon" />
            <span>MongoDB &bull; Express &bull; React.js &bull; Node.js</span>
          </div>
          <div className="hero-stat-pill">
            <CheckCircle2 size={15} className="pill-cyan-icon" />
            <span>Full Stack Grade A Certified</span>
          </div>
          <div className="hero-stat-pill">
            <MapPin size={15} className="pill-cyan-icon" />
            <span>Surat, Gujarat, India</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hero-modern-actions" data-aos="fade-up" data-aos-delay="400">
          <a
            href="#projects"
            className="btn btn-primary hero-main-btn"
            onClick={handleScrollToProjects}
          >
            <span>View Featured Projects</span>
            <ArrowDown size={17} />
          </a>

          <a
            href="#contact"
            className="btn btn-secondary hero-main-btn"
          >
            <Mail size={16} />
            <span>Get In Touch</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline hero-main-btn"
          >
            <GithubIcon size={17} />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Quick Contact Direct Copy Bar */}
        <div className="hero-copy-bar" data-aos="fade-up" data-aos-delay="500">
          <div
            className="quick-copy-item"
            onClick={() => onCopy(personalInfo.email, 'Email copied to clipboard!')}
            title="Click to copy email"
          >
            <Mail size={15} className="copy-bar-icon" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="copy-bar-divider" />
          <div
            className="quick-copy-item"
            onClick={() => onCopy(personalInfo.phone, 'Phone copied to clipboard!')}
            title="Click to copy phone"
          >
            <Phone size={15} className="copy-bar-icon" />
            <span>{personalInfo.phone}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
