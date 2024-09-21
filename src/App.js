import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <section id="home" className="section">
        <h1>Home</h1>
        <p>Welcome to the Computer Society of India (CSI) of VCET</p>
      </section>
      <section id="about" className="section">
        <h1>About Us</h1>
        <p>CSI VCET is a national level organization dedicated to fostering the growth of technology professionals in our college. We are officially associated with the Computer Society of India(CSI)</p>
      </section>
      <section id="events" className="section">
        <h1>Events</h1>
        <p>CSI VCET organizes various activities, including:
          
            <li>Technical Events like product showcase, VNPS, oscillation and various competitions.</li>
            <li>Seminars focused on emerging technologies and industry trends.</li>
            <li>Workshops on programming, software development, and more.</li>
          
        </p>
      </section>
      <section id="contact" className="section">
        <h1>Contact Us</h1>
        <p>Get in touch with us for more information.</p>
      </section>
    </React.Fragment>
  );
}

export default App;
