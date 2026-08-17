import { Layout, Sparkles, Zap, CheckCircle2, User, Award } from 'lucide-react';
import { personalInfo, strengths } from '../data/portfolioData';
import './About.css';

export default function About() {
  const getStrengthIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="strength-icon" size={22} />;
      case 'Sparkles':
        return <Sparkles className="strength-icon" size={22} />;
      case 'Zap':
        return <Zap className="strength-icon" size={22} />;
      default:
        return <Award className="strength-icon" size={22} />;
    }
  };

  return (
    <section id="about" className="section-wrapper about-modern-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading-area" data-aos="fade-up">
          <span className="section-tag-pill">
            <User size={13} />
            <span>About Me</span>
          </span>
          <h2 className="section-main-title">Engineering With Care &amp; Precision</h2>
          <p className="section-desc">
            Bridging technical full-stack architecture with polished visual design.
          </p>
        </div>

        {/* About Main Card */}
        <div className="about-overview-card" data-aos="fade-up" data-aos-delay="100">
          <div className="about-main-text">
            <h3 className="about-greeting-title">Hello, I'm Kishan Patel</h3>
            <p>
              I am a <strong>MERN Stack Developer</strong> based in Surat, Gujarat, passionate about developing clean, performant, and scalable web applications. With hands-on experience spanning both frontend and backend development—from designing normalized MongoDB schemas and creating secure RESTful Express APIs to building fluid React user interfaces—I ensure every feature is built to a high standard.
            </p>
            <p>
              My background includes managing warehouse operations as an Amazon Supervisor (STWB) at Pavan Logistics, which developed my team leadership, inventory discipline, and problem-solving abilities under time-critical deadlines.
            </p>
          </div>

          <div className="about-credentials-grid">
            <div className="credential-box">
              <span className="credential-label">Academic Degree</span>
              <span className="credential-val">Bachelor of Computer Application (BCA)</span>
              <span className="credential-sub">SDJ College, VNSGU University</span>
            </div>
            <div className="credential-box">
              <span className="credential-label">Technical Certification</span>
              <span className="credential-val">Full Stack Web Development (Grade A)</span>
              <span className="credential-sub">Easyskill Career Academy</span>
            </div>
          </div>
        </div>

        {/* Strengths Cards */}
        <div className="strengths-cards-row">
          {strengths.map((item, idx) => (
            <div
              key={item.id}
              className="strength-modern-card"
              data-aos="fade-up"
              data-aos-delay={100 + idx * 100}
            >
              <div className="strength-icon-box">
                {getStrengthIcon(item.icon)}
              </div>
              <h4 className="strength-card-title">{item.title}</h4>
              <p className="strength-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
