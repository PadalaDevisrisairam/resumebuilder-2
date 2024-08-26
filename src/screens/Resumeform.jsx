// ResumeInputForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Resumeform = () => {
    const navigator=useNavigate();
    // State to store form inputs
    const [formData, setformData] = useState({
        name: '',
        email: '',
        phonenumber: '',
        education: '',
        skills: '',
        linkedinurl: '',
        githuburl: ''
    });

    // Handle form input changes
    const handleChange = async (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
        console.log('assignment completed');
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/resforrou", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phonenumber: formData.phonenumber,
                education: formData.education,
                skills: formData.skills,
                linkedinurl: formData.linkedinurl,
                githuburl: formData.githuburl
            })
        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Try another time buddy");
        } else {
            alert("You nailed it response submitted");
            navigator("/resumelist");
        }
    };

    return (
        <div className="container mt-5">

            <form onSubmit={handleSubmit} className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card shadow'>
                            <div className='card-body'>
                                <h2 className="mb-4">Resume Input Form</h2>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        name="phonenumber"
                                        value={formData.phonenumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="education" className="form-label">Education</label>
                                    <textarea
                                        className="form-control"
                                        id="summary"
                                        name="education"
                                        rows="3"
                                        value={formData.education}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="skills" className="form-label">Skills</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="skills"
                                        value={formData.skills}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="linkedinurl" className="form-label">Linked-in url</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="linkedinurl"
                                        value={formData.linkedinurl}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="githuburl" className="form-label">Git hub url</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="githuburl"
                                        value={formData.githuburl}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>


            </form>
        </div>
    );
};

export default Resumeform;
