import { Code, Server, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code size={20} className="skill-cat-icon" />;
      case 'Server':
        return <Server size={20} className="skill-cat-icon" />;
      case 'Wrench':
        return <Wrench size={20} className="skill-cat-icon" />;
      default:
        return <Code size={20} className="skill-cat-icon" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper skills-modern-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading-area" data-aos="fade-up">
          <span className="section-tag-pill">
            <Code size={13} />
            <span>Technical Skills</span>
          </span>
          <h2 className="section-main-title">Core Technologies &amp; Toolset</h2>
          <p className="section-desc">
            Technologies, libraries, and frameworks I use to engineer full-stack web applications.
          </p>
        </div>

        {/* 3 Categorized Cards */}
        <div className="skills-categories-grid">
          {skillsData.map((category, idx) => (
            <div
              key={category.category}
              className="skill-category-box"
              data-aos="fade-up"
              data-aos-delay={100 + idx * 120}
            >
              
              <div className="category-top-row">
                <div className="category-icon-wrapper">
                  {getCategoryIcon(category.icon)}
                </div>
                <div className="category-title-wrap">
                  <h3 className="category-name">{category.category}</h3>
                  <span className="category-summary">{category.description}</span>
                </div>
              </div>

              <div className="category-chips-list">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-chip-item">
                    <span className="skill-chip-bullet" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
