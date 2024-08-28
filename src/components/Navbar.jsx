import React from 'react'
import { Link } from 'react-router-dom'
import './nav_home.css'
import shield from './shield.png'
import customize from './customize.png'
import easytouse from './snap.png'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="homepage-container">
        <header className="header">
          <h1 className="title">Build Your Professional Resume</h1>
          <p className="subtitle">Create a stunning resume in minutes with our easy-to-use builder.</p>
          <Link className='btn btn-success ' to='/resumeform'>Create-Resume</Link>
          <Link className='btn btn-success ms-2' to='/resumelist'>view created resumes</Link>
        </header>

        <section className="features-section">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <img src={customize} alt='secure'/>
              <h3>Customizable Templates</h3>
              <p>Select from a variety of templates to suit your professional needs.</p>
            </div>
            <div className="feature">
              <img src={easytouse} alt="Easy to Use" />
              <h3>Easy to Use</h3>
              <p>Our intuitive builder helps you create a resume effortlessly.</p>
            </div>
            <div className="feature">
              <img src={shield} alt="Secure" />
              <h3>Secure</h3>
              <p>Your data is safe with us, ensuring complete privacy and security.</p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What Our Users Say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>"This resume builder made it so easy to create a professional resume. Highly recommend!"</p>
              <p>- Sairam p.</p>
            </div>
            <div className="testimonial">
              <p>"A user-friendly tool with great templates. I landed my job thanks to this!"</p>
              <p>- Sairam p.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2024 Resume Builder. All rights reserved.</p>
        </footer>
      </div>
    

    </div>
  )
}
