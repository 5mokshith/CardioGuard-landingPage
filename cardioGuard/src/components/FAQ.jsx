import React from 'react';
import '../css/FAQ.css';

const FAQ = () => {
  return (
    <div className="cardioguard-app">
   

      <main>
        <div className="faq-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to the most common questions about CardioGuard.</p>
          </div>

          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-question">
                How accurate is CardioGuard's prediction system?
                <span className="expand-icon">+</span>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                Which sensors are compatible with CardioGuard?
                <span className="expand-icon">+</span>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                How is my medical data protected?
                <span className="expand-icon">+</span>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                What happens when an emergency is detected?
                <span className="expand-icon">+</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;