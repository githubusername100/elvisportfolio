import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., log the data, send it to a server, etc.)
    console.log(formData);
    // Redirect to Home Page after submission
    window.location.href = '/'; // Assuming the Home Page is at '/'
  };

  return (
    <>
      <h2>Contact Me</h2>
      
      <div className="contact-info">
        <p><strong>Email:</strong> your.email@example.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
      </div>

      <h3>Send a Message</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input 
            type="tel" 
            id="contactNumber" 
            name="contactNumber" 
            value={formData.contactNumber} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div>
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleInputChange} 
            required 
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
