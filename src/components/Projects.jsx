import { ExternalLink, Layers, Check, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper projects-modern-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading-area" data-aos="fade-up">
          <span className="section-tag-pill">
            <Layers size={13} />
            <span>Featured Work</span>
          </span>
          <h2 className="section-main-title">Full-Stack MERN Projects</h2>
          <p className="section-desc">
            Click directly on any website screenshot or action button to launch the live application in a new tab.
          </p>
        </div>

        {/* Showcase All Full-Stack MERN Projects */}
        <div className="projects-showcase-list">
          {projectsData.map((project, idx) => (
            <article
              key={project.id}
              className="project-feature-card"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              
              {/* Left/Top: Interactive Browser Mockup with Clickable Screenshot */}
              <div className="project-mockup-wrapper">
                <div className="mockup-header-bar">
                  <div className="mockup-window-controls">
                    <span className="window-dot red" />
                    <span className="window-dot yellow" />
                    <span className="window-dot green" />
                  </div>
                  <div className="mockup-url-pill">
                    <span className="lock-icon">🔒</span>
                    <span className="url-text">{project.liveUrl.replace('https://', '')}</span>
                  </div>
                  <div className="mockup-live-status">
                    <span className="pulse-dot" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Clickable Image -> Opens in New Tab */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-screenshot-anchor"
                  title={`Open ${project.title} in new tab`}
                >
                  <div className="screenshot-media-box">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="screenshot-img"
                      loading="lazy"
                    />
                    
                    {/* Hover Prompt Overlay */}
                    <div className="screenshot-hover-mask">
                      <div className="hover-action-badge">
                        <span>Click to Open Live Website</span>
                        <ArrowUpRight size={17} />
                      </div>
                      <span className="hover-sub-text">Opens live project in a new tab</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Right/Bottom: Project Details, Architecture Highlights & Links */}
              <div className="project-meta-wrapper">
                
                <div className="project-badge-tag">{project.badge}</div>

                <h3 className="project-heading-title">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>

                <p className="project-description-text">
                  {project.description}
                </p>

                {/* Key Architectural Highlights from Resume */}
                <div className="project-bullets-container">
                  <h4 className="bullets-heading">Key Technical Highlights:</h4>
                  <ul className="bullets-items-list">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="bullet-item-row">
                        <Check size={16} className="bullet-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="project-tech-stack-row">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="project-actions-row">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Live Website</span>
                    <ExternalLink size={15} />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <GithubIcon size={15} />
                      <span>GitHub Code</span>
                    </a>
                  )}

                  {project.adminUrl && (
                    <a
                      href={project.adminUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <ShieldCheck size={15} />
                      <span>Admin Panel</span>
                    </a>
                  )}
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
