import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowUpRight,
  AlertCircle,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { api } from '../services/api';
import './Contact.css';

const contactValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name is too long')
    .required('Please enter your name'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address')
    .required('Please enter your email address'),
  subject: Yup.string()
    .trim()
    .max(100, 'Subject is too long')
    .optional(),
  message: Yup.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long')
    .required('Please write your message')
});

export default function Contact({ onCopy }) {
  const [copiedKey, setCopiedKey] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const handleLocalCopy = (text, label, key) => {
    onCopy(text, `${label} copied to clipboard!`);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitStatus({ type: null, message: '' });
      try {
        const response = await api.submitContact(values);
        if (response.success) {
          setSubmitStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
          });
          if (onCopy) onCopy('', 'Message received successfully!');
          resetForm();
        } else {
          setSubmitStatus({
            type: 'error',
            message: response.message || 'Failed to send message. Please try again.'
          });
        }
      } catch (err) {
        setSubmitStatus({
          type: 'error',
          message: 'Unable to connect to server. Please check your connection and try again.'
        });
      } finally {
        setSubmitting(false);
      }
    }
  });

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
                  aria-label="Copy email"
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
                  aria-label="Copy phone"
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
                  aria-label="Open GitHub profile"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form with Formik + Yup */}
          <div className="contact-form-column" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-form-container">
              <h3 className="form-title-text">Send a Message</h3>
              <p className="form-sub-text">
                Fill in the form below. Messages are saved directly to the database and notifications sent.
              </p>

              <form onSubmit={formik.handleSubmit} className="modern-message-form" noValidate>
                
                <div className="form-inputs-row">
                  {/* Name Field */}
                  <div className="form-field-group">
                    <label htmlFor="name" className="form-input-label">
                      Your Name <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Alex Smith"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`form-text-input ${
                        formik.touched.name && formik.errors.name ? 'input-error' : ''
                      } ${formik.touched.name && !formik.errors.name ? 'input-valid' : ''}`}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="field-error-msg">
                        <AlertCircle size={13} />
                        <span>{formik.errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-field-group">
                    <label htmlFor="email" className="form-input-label">
                      Your Email <span className="req-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. alex@example.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`form-text-input ${
                        formik.touched.email && formik.errors.email ? 'input-error' : ''
                      } ${formik.touched.email && !formik.errors.email ? 'input-valid' : ''}`}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="field-error-msg">
                        <AlertCircle size={13} />
                        <span>{formik.errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="form-field-group">
                  <label htmlFor="subject" className="form-input-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Job Opportunity / Project Inquiry"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`form-text-input ${
                      formik.touched.subject && formik.errors.subject ? 'input-error' : ''
                    }`}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <div className="field-error-msg">
                      <AlertCircle size={13} />
                      <span>{formik.errors.subject}</span>
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-field-group">
                  <label htmlFor="message" className="form-input-label">
                    Message <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Hi Kishan, I'd like to discuss a MERN development project..."
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`form-text-area ${
                      formik.touched.message && formik.errors.message ? 'input-error' : ''
                    } ${formik.touched.message && !formik.errors.message ? 'input-valid' : ''}`}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="field-error-msg">
                      <AlertCircle size={13} />
                      <span>{formik.errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Feedback Banner */}
                {submitStatus.type && (
                  <div className={`form-feedback-banner ${submitStatus.type}`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle2 size={18} className="feedback-icon" />
                    ) : (
                      <AlertCircle size={18} className="feedback-icon" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="btn btn-primary form-submit-button"
                >
                  {formik.isSubmitting ? (
                    <>
                      <Loader2 size={16} className="btn-spin-icon" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
