import React, { useState } from 'react';
import { Mail, Clock, Globe, CheckCircle2 } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import './ContactPage.css';

export default function ContactPage() {
  usePageMetadata({
    title: 'Contact Hutomate — Direct Enquiries & Consultations',
    description: 'Get in touch with Hutomate. Send a direct enquiry, discuss partnerships, or request a technical discussion about your business automation needs.',
    path: '/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className="contact-page">
      <PageHeader
        eyebrow="LET'S TALK"
        badgeText="Get in Touch"
        badgeType="purple"
        title="Let’s start a conversation about your operations."
        description="Have a general question, partnership enquiry, or want to explore an automation challenge? Reach out directly to our team. We respond within 1 business day."
      />

      <section className="section detail-section">
        <div className="container">
          <div className="contact-layout-grid">
            <div className="contact-info-panel">
              <div className="contact-info-block card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-purple, #6366f1)' }}>
                  <Mail size={20} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct Inquiries</span>
                </div>
                <h3 className="contact-info-title">Email Us Directly</h3>
                <p className="contact-info-desc">
                  For general correspondence, architectural inquiries, or press:
                </p>
                <a href="mailto:hello@hutomate.com" className="direct-email-link">
                  hello@hutomate.com
                </a>
              </div>

              <div className="contact-info-block card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981' }}>
                  <Clock size={20} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Response Time</span>
                </div>
                <h3 className="contact-info-title">1 Business Day Commitment</h3>
                <p className="contact-info-desc">
                  Every inquiry is reviewed directly by an automation engineer or director. We do not use automated generic auto-responders that get lost in the void.
                </p>
              </div>

              <div className="contact-info-block card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6' }}>
                  <Globe size={20} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Project Scoping</span>
                </div>
                <h3 className="contact-info-title">Planning a Specific Implementation?</h3>
                <p className="contact-info-desc">
                  If you have a defined business workflow or process you wish to scope for automation, please use our comprehensive project scoping form.
                </p>
                <div style={{ marginTop: '12px' }}>
                  <Button variant="secondary" size="sm" arrow href="/start-project">
                    Go to Scoping Form
                  </Button>
                </div>
              </div>
            </div>

            <div className="contact-form-card card">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Message Received
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you, {formData.name}. We have received your message regarding "{formData.subject}" and will respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)' }}>
                    Send a General Message
                  </h3>

                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Your Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="company">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Operations Ltd"
                      className="form-input"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">
                      Inquiry Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="General Enquiry">General Operational Enquiry</option>
                      <option value="Technical Question">Technical Feasibility Question</option>
                      <option value="Partnership">Software / System Partnership</option>
                      <option value="Press / Media">Press / Media Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Message <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we assist your business operations?"
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {errorMsg && (
                    <div style={{ color: '#ef4444', fontSize: '0.875rem', marginBottom: '16px' }}>
                      {errorMsg}
                    </div>
                  )}

                  <Button variant="primary" size="md" arrow type="submit" style={{ width: '100%' }}>
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
