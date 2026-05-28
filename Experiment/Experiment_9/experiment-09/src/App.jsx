import React, { useState } from 'react';
import './App.css';

function App() {
  // 1. Manage form field state in a single object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // 2. Track an API ID or simulation state
  const [apiId, setApiId] = useState(1);

  // Handle inputs dynamically using the 'name' attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the current form values
    console.log('Submitted Data:', formData);
    
    // Simulate API sequence increment upon registration
    alert(`Successfully Registered!\nName: ${formData.name}\nEmail: ${formData.email}`);
    setApiId((prevId) => prevId + 1);

    // Optional: Clear form after submit
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="experiment-container">
      {/* Top Header Match */}
      <header className="experiment-header">
        Experiment 09
      </header>

      {/* Main Registration Card Layout */}
      <main className="form-wrapper">
        <div className="registration-card">
          <h1 className="form-title">Registration Form</h1>
          <p className="api-display">API Id: <strong>{apiId}</strong></p>

          <form onSubmit={handleSubmit} className="form-element">
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Register Here!
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;