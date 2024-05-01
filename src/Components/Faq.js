import React, { useState } from 'react';
import "./Faq.css";

const Faq = () => {
  // State to manage which question is currently active
  const [activeIndex, setActiveIndex] = useState(null);

  // Dummy data for FAQs
  const faqs = [
    {
      question: "How does your solution address the unique needs of individuals facing different types of fears and anxieties?",
      answer: "Our solution employs personalized therapy plans generated through interactive chatbot assessments, ensuring that each individual's specific fears and preferences are taken into account.",
    },
    {
      question: "Can you provide more information on the effectiveness of your therapy sessions using AR/VR technology?",
      answer: "Studies have shown that immersive therapy sessions using AR/VR technology can significantly reduce fear and anxiety levels in individuals. Our platform integrates real-time feedback and support during these sessions to maximize effectiveness.",
    },
    {
      question: "How do you ensure the privacy and security of user data within your platform?",
      answer: "We have implemented strict security measures and adhere to all relevant regulations to protect user data confidentiality. Our platform encrypts user data and only shares it with authorized individuals, such as healthcare providers, as necessary for treatment purposes.",
    },
    {
      question: "What are the potential costs associated with accessing your therapy services?",
      answer: "We offer various pricing options, including subscription-based services and affordable licensing agreements, to ensure affordability and accessibility for users. Additionally, we may offer discounts or financial assistance programs for individuals with limited financial resources.",
    },
    {
      question: "How do you plan to expand the reach of your solution to underserved populations or remote areas with limited access to mental health services?",
      answer: "We are actively exploring partnerships with community organizations, healthcare providers, and government agencies to expand access to our solution in underserved areas. Additionally, we may offer mobile outreach programs or teletherapy services to reach individuals in remote locations.",
    },
    // Add more FAQs as needed
  ];

  // Function to handle click on a question
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
        <section className='faq'>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className='faq-question-set' key={index} style={{ marginBottom: '1rem' }}>
          <div className='faq-question'
            onClick={() => handleClick(index)}
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer"style={{ marginTop: '0.5rem' }}>{faq.answer}</div>
          )}
        </div>
      ))}

  </section>
    </div>
  );
};

export default Faq;
