import React, { useState } from 'react';
import '../../Styles/Questions.css'

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'Why there is no Signup for Acc holder ?',
      answer: 'An Account Holder get his credientials from bank book in offline mode',
    },
    {
      question: 'How to access employee mode ?',
      answer: 'Login employee with credientials id: 0919 password: 0919 and access employee mode',
    },
    {
      question: 'Difference between both modes',
      answer: 'An Acc holder cannot perform activities like withdraw, deposite and cannot have acces to every user',
    },
    {
      question:"What administrative actions can an employee perform?", 
      answer:'Create new user, Suspend existing user, generate history printing to passbooks'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <center className="faq-title">Have a question ?</center>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button onClick={() => toggleFAQ(index)} className="faq-question">
            <span>{item.question}</span>
            <span className="faq-icon">{openIndex === index ? '–' : '+'}</span>
          </button>
          {openIndex === index && (
            <p className="faq-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
