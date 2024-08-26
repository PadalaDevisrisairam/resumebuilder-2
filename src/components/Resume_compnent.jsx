import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Resume_comp.css'; // Custom CSS for styling

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage or pass it to the next page
    localStorage.setItem('resumeData', JSON.stringify(formData));
    navigate('/resume-display');
  };

  return (
    <div className="resume-form-container">
      <h2>Fill Out Your Resume Details</h2>
      <form onSubmit={handleSubmit} className="resume-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <textarea name="education" placeholder="Education" value={formData.education} onChange={handleChange} required />
        <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
        <textarea name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeForm;
