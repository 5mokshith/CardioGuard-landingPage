import React, { useState } from "react";
import "../css/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How accurate is CardioGuard's prediction system?",
      answer:
        "CardioGuard's prediction system is highly accurate, leveraging advanced algorithms and real-time data analysis.",
    },
    {
      question: "Which sensors are compatible with CardioGuard?",
      answer:
        "CardioGuard is compatible with a wide range of medical-grade sensors, including heart rate monitors and blood pressure cuffs.",
    },
    {
      question: "How is my medical data protected?",
      answer:
        "Your medical data is encrypted and stored securely, adhering to the highest industry standards for data protection.",
    },
    {
      question: "What happens when an emergency is detected?",
      answer:
        "In case of an emergency, CardioGuard immediately alerts your emergency contacts and provides real-time updates.",
    },
  ];

  return (
    <div className="cardioguard-app">
      <main>
        <div className="faq-container">
          <div className="faq-header">
            <p id="redp">Common Questions</p>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to the most common questions about CardioGuard.</p>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div className="faq-item" key={index}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {item.question}
                  <span className="expand-icon">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
