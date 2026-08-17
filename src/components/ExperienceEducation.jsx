import { Briefcase, GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';
import './ExperienceEducation.css';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="section-wrapper exp-edu-modern-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading-area" data-aos="fade-up">
          <span className="section-tag-pill">
            <Briefcase size={13} />
            <span>Background</span>
          </span>
          <h2 className="section-main-title">Experience &amp; Education</h2>
          <p className="section-desc">
            My professional leadership experience and formal computer applications education.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="exp-edu-dual-grid">
          
          {/* Left: Experience */}
          <div className="exp-edu-column" data-aos="fade-up" data-aos-delay="100">
            <div className="column-header-title">
              <div className="column-icon-box">
                <Briefcase size={18} />
              </div>
              <h3>Work Experience</h3>
            </div>

            <div className="column-cards-list">
              {experienceData.map((exp) => (
                <div key={exp.id} className="exp-edu-card">
                  <div className="card-top-meta">
                    <span className="period-badge">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="type-badge">{exp.type}</span>
                  </div>

                  <h4 className="card-role-title">{exp.role}</h4>
                  <span className="card-org-name">{exp.company}</span>

                  <p className="card-desc-text">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education */}
          <div className="exp-edu-column" data-aos="fade-up" data-aos-delay="200">
            <div className="column-header-title">
              <div className="column-icon-box cyan">
                <GraduationCap size={18} />
              </div>
              <h3>Education &amp; Credentials</h3>
            </div>

            <div className="column-cards-list">
              {educationData.map((edu) => (
                <div key={edu.id} className="exp-edu-card">
                  <div className="card-top-meta">
                    <span className="period-badge">
                      <Calendar size={13} />
                      <span>{edu.period}</span>
                    </span>
                    {edu.grade && (
                      <span className="grade-badge">
                        <Award size={12} />
                        <span>{edu.grade}</span>
                      </span>
                    )}
                  </div>

                  <h4 className="card-role-title">{edu.degree}</h4>
                  <span className="card-org-name">{edu.institution}</span>

                  <p className="card-desc-text">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
