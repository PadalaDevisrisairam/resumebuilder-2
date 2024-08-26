import React from 'react'
import { Link } from 'react-router-dom'
import './nav_home.css'
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
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Signup</Link>
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
          <button className="cta-button">Get Started</button>
        </header>

        <section className="features-section">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <img src="customizable-templates.png" alt="Customizable Templates" />
              <h3>Customizable Templates</h3>
              <p>Select from a variety of templates to suit your professional needs.</p>
            </div>
            <div className="feature">
              <img src="easy-to-use.png" alt="Easy to Use" />
              <h3>Easy to Use</h3>
              <p>Our intuitive builder helps you create a resume effortlessly.</p>
            </div>
            <div className="feature">
              <img src="secure.png" alt="Secure" />
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
              <p>- Sarah K.</p>
            </div>
            <div className="testimonial">
              <p>"A user-friendly tool with great templates. I landed my job thanks to this!"</p>
              <p>- John D.</p>
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
