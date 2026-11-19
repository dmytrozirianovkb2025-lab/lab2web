import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null; 

  return (
    <div className="modal" style={{
      display: 'flex',
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div className="modal-content" style={{
        backgroundColor: '#fff',
        color: '#000',
        padding: '25px',
        borderRadius: '8px',
        position: 'relative',
        width: '320px'
      }}>
        <span 
          className="close-btn" 
          onClick={() => setIsOpen(false)}
          style={{ position: 'absolute', top: '10px', right: '15px', cursor: 'pointer', fontSize: '24px' }}
        >
          &times;
        </span>
        <h3>Зворотний зв'язок</h3>
        
        <form action="https://formspree.io/f/mnpprggj" method="POST" className="feedback-form">
          <div style={{ marginTop: '10px' }}>
            <label>Ім'я:</label>
            <input type="text" name="name" required style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Email:</label>
            <input type="email" name="email" required style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Телефон:</label>
            <input type="tel" name="phone" required style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Повідомлення:</label>
            <textarea name="message" rows="4" required style={{ width: '100%', padding: '8px' }}></textarea>
          </div>
          <button type="submit" style={{
            marginTop: '15px', width: '100%', padding: '10px',
            backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'
          }}>
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;