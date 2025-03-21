
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Function to submit form to Google Sheets using Sheetdb.io
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill all required fields.',
        loading: false
      });
      return;
    }
    
    // Set loading state
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      loading: true
    });
    
    // Add timestamp
    const dataToSend = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    
    try {
      // Using SheetDB.io as an example
      // You'll need to replace with your own SheetDB URL
      // Sign up at sheetdb.io and connect to your Google Sheet
      const SHEET_DB_URL = 'https://sheetdb.io/api/v1/n40dtsoyf5bje';
      
      const response = await fetch(SHEET_DB_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: dataToSend })
      });
      
      if (response.ok) {
        // Success message
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully and saved to Google Sheets.',
          loading: false
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: true,
        error: true,
        message: 'There was an error sending your message. Please try again later.',
        loading: false
      });
    }
  };
  
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h4>Email</h4>
            <p>snehasharma94911@gmail.com</p>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <p>+91 9182829236</p>
          </div>
          <div className="info-item">
            <h4>Location</h4>
            <p>Visakhapatnam, Andhra Pradesh</p>
            <p>India</p>
          </div>
          
          <div className="social-links">
            <a href="https://linkedin.com/in/sneha-sharma-58a7b024b" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/sneha9182" className="social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="contact-form-container">
          {formStatus.submitted && (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="form-control"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className="form-control"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                className="form-control"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn submit-btn"
              disabled={formStatus.loading}
            >
              {formStatus.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;