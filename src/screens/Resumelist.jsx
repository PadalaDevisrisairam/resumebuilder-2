import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function Resumelist() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/resumelist');
        if (!response.ok) {
          throw new Error('Failed to fetch resumes');
        }
        const data = await response.json();
        setResumes(data);
      } catch (error) {
        console.error('Error fetching resumes:', error);
      }
    };

    fetchResumes();
  }, []);

  if (resumes.length === 0) {
    return <div>No resumes found.</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Resume List</h2>
      <Link to="/home" className='btn btn-primary'>Back Home</Link>
      <div className="row">
        {resumes.map((resume) => (
          <div className="col-md-4 mb-4" key={resume._id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{resume.name}</h5>
                <p className="card-text"><strong>Email:</strong> {resume.email}</p>
                <p className="card-text"><strong>Phone:</strong> {resume.phonenumber}</p>
                <p className="card-text"><strong>Education:</strong> {resume.education}</p>
                <p className="card-text"><strong>Skills:</strong> {resume.skills}</p>
                <p className="card-text"><strong>LinkedIn:</strong> <a href={resume.linkedinurl} target="_blank" rel="noopener noreferrer">{resume.linkedinurl}</a></p>
                <p className="card-text"><strong>GitHub:</strong> <a href={resume.githuburl} target="_blank" rel="noopener noreferrer">{resume.githuburl}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resumelist;
