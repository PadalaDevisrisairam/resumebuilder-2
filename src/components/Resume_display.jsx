import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resume_display.css'; // Custom CSS for styling
import jsPDF from 'jspdf';

const ResumeDisplay = () => {
  const navigate = useNavigate();
  const resumeData = JSON.parse(localStorage.getItem('resumeData'));

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${resumeData.name}`, 10, 10);
    doc.text(`Email: ${resumeData.email}`, 10, 20);
    doc.text(`Phone: ${resumeData.phone}`, 10, 30);
    doc.text(`Education: ${resumeData.education}`, 10, 40);
    doc.text(`Experience: ${resumeData.experience}`, 10, 50);
    doc.text(`Skills: ${resumeData.skills}`, 10, 60);
    doc.save('resume.pdf');
  };

  return (
    <div className="resume-display-container">
      <h2>Your Resume</h2>
      <p><strong>Name:</strong> {resumeData.name}</p>
      <p><strong>Email:</strong> {resumeData.email}</p>
      <p><strong>Phone:</strong> {resumeData.phone}</p>
      <p><strong>Education:</strong> {resumeData.education}</p>
      <p><strong>Experience:</strong> {resumeData.experience}</p>
      <p><strong>Skills:</strong> {resumeData.skills}</p>
      <button onClick={handleDownloadPDF}>Download as PDF</button>
      <button onClick={() => navigate('/')}>Go Back to Home</button>
    </div>
  );
};

export default ResumeDisplay;
