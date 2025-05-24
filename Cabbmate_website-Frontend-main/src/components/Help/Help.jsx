import React from 'react'
import './Help.css'
import { FaCar, FaDollarSign, FaClipboardList, FaPhoneAlt, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa'

const Help = () => {
  return (
    <div className='help_container'>
      <div className="help_header">
        <h1>How Can We Help You?</h1>
        <p>Find answers to common questions or reach out to our support team</p>
      </div>

      <div className="help_search">
        <input type="text" placeholder="Search for help topics..." />
        <button>Search</button>
      </div>

      <div className="help_sections">
        <div className="help_card">
          <FaCar />
          <h3>Booking Process</h3>
          <p>Learn how to book a car and manage your reservations</p>
        </div>

        <div className="help_card">
          <FaDollarSign />
          <h3>Pricing & Payments</h3>
          <p>Information about rates, deposits, and payment methods</p>
        </div>

        <div className="help_card">
          <FaClipboardList />
          <h3>Rental Requirements</h3>
          <p>Documents needed and eligibility criteria</p>
        </div>

        <div className="help_card">
          <FaPhoneAlt />
          <h3>Contact Support</h3>
          <p>Get in touch with our customer service team</p>
        </div>
      </div>

      <div className="faq_section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq_items">
          <details>
            <summary>What documents do I need to rent a car?</summary>
            <p>You'll need a valid driver's license, credit card, and proof of insurance. International renters may need additional documentation.</p>
          </details>

          <details>
            <summary>How do I modify or cancel my reservation?</summary>
            <p>You can modify or cancel your reservation through your account dashboard or by contacting our support team.</p>
          </details>

          <details>
            <summary>What is included in the rental price?</summary>
            <p>Our basic rental price includes insurance, maintenance, and 24/7 roadside assistance.</p>
          </details>
        </div>
      </div>

      <div className="contact_section">
        <h2>Still Need Help?</h2>
        <p>Our support team is here to help you with any questions or concerns you may have.</p>
        <div className="contact_options">
          <div className="contact_card">
            <FaEnvelope />
            <h4>Email Us</h4>
            <p>connect@cabbmate</p>
          </div>
          <div className="contact_card">
            <FaPhone />
            <h4>Call Us</h4>
            <p>+91 9359378865</p>
          </div>
          <div className="contact_card">
            <FaComments />
            <h4>Live Chat</h4>
            <p>Available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help