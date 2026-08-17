import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact({ onCopy }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedKey, setCopiedKey] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleLocalCopy = (text, label, key) => {
    onCopy(text, `${label} copied to clipboard!`);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-wrapper contact-modern-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading-area" data-aos="fade-up">
          <span className="section-tag-pill">
            <MessageSquare size={13} />
            <span>Get In Touch</span>
          </span>
          <h2 className="section-main-title">Let's Build Something Great</h2>
          <p className="section-desc">
            I am currently open to full-time developer positions and high-impact web development projects.
          </p>
        </div>

        {/* Contact Dual Grid */}
        <div className="contact-modern-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-column" data-aos="fade-up" data-aos-delay="100">
            <h3 className="contact-sub-heading">Direct Contact Information</h3>
            <p className="contact-sub-desc">
              Feel free to reach out directly via email, phone, or connect through GitHub.
            </p>

            <div className="contact-cards-stack">
              
              {/* Email */}
              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <Mail size={18} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-meta-label">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact-meta-link">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() => handleLocalCopy(personalInfo.email, 'Email', 'email')}
                  title="Copy email"
                >
                  {copiedKey === 'email' ? <Check size={15} className="copied-check" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <Phone size={18} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-meta-label">Phone &amp; WhatsApp</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-meta-link">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() => handleLocalCopy(personalInfo.phone, 'Phone', 'phone')}
                  title="Copy phone"
                >
                  {copiedKey === 'phone' ? <Check size={15} className="copied-check" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Location */}
              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-meta-label">Location</span>
                  <span className="contact-meta-link static">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <GithubIcon size={18} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-meta-label">GitHub</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-meta-link"
                  >
                    github.com/{personalInfo.githubUsername}
                  </a>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-copy-btn"
                  title="Open GitHub profile"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-column" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-form-container">
              <h3 className="form-title-text">Send a Message</h3>
              <p className="form-sub-text">
                Fill in the fields below to start a conversation.
              </p>

              <form onSubmit={handleSubmit} className="modern-message-form">
                <div className="form-inputs-row">
                  <div className="form-field-group">
                    <label htmlFor="name" className="form-input-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-text-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="email" className="form-input-label">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-text-input"
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="subject" className="form-input-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Job Opportunity / Project Discussion"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-text-input"
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="message" className="form-input-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Hi Kishan, I'd like to talk about..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-text-area"
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit-button">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>

                {submitted && (
                  <div className="form-sent-notification">
                    <Check size={16} />
                    <span>Launching your email client to send message...</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
