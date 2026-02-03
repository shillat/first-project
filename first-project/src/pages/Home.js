import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container" style={containerStyle}>
      <div className="home-content" style={contentLayout}>
        
        {/* Left Side: Messaging */}
        <div className="hero-text" style={textSectionStyle}>
          <h5 style={badgeStyle}>Available for Strategic Opportunities</h5>
          <h1 style={headlineStyle}>
            Designing Systems, <br /> 
            <span style={{ color: '#61dafb' }}>Leading with Code.</span>
          </h1>
          <p style={subTextStyle}>
            I am <strong>Naigaga Shillah</strong>, a Software Engineer specializing in the JavaScript ecosystem. 
            I bridge the gap between complex technical architecture and impactful leadership.
          </p>
          
          <div className="cta-buttons" style={buttonGroupStyle}>
            <Link to="/projects" style={primaryBtnStyle}>
              Explore Projects
            </Link>
            <a 
              href="https://github.com/shillat" 
              target="_blank" 
              rel="noreferrer" 
              style={secondaryBtnStyle}
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Right Side: Visual Representation */}
        <div className="hero-visual" style={visualSectionStyle}>
          {/* This is where your tech illustration goes */}
          <div style={illustrationContainer}>
             <img 
                src="./hero-illustration.jpg" 
                alt="Software Engineering Concept" 
                style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
                onError={(e) => e.target.style.display='none'} // Hides broken icon if file missing
             />
             {/* Abstract background shape for flair */}
             <div style={blobStyle}></div>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Styles ---



const containerStyle = {
  minHeight: '85vh',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10%',
  backgroundColor: '#0a0a0a', // Deep Black/Midnight background
  color: '#ffffff'
};

const badgeStyle = {
  color: '#4caf50', // Success Green for the "Available" status
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: 'bold',
  fontSize: '0.8rem',
  marginBottom: '1rem',
  border: '1px solid #4caf50',
  padding: '4px 12px',
  borderRadius: '20px',
  display: 'inline-block'
};

const headlineStyle = {
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  lineHeight: '1.1',
  margin: '0 0 1.5rem 0',
  color: '#ffffff'
};

// We use Gold here to emphasize your leadership and specialty
const highlightStyle = {
  color: '#FFD700', // Gold/Yellow
};

const subTextStyle = {
  fontSize: '1.2rem',
  color: '#cccccc', // Soft Gray for readability on black
  lineHeight: '1.6',
  marginBottom: '2.5rem',
  maxWidth: '550px'
};

const primaryBtnStyle = {
  backgroundColor: '#FFD700', // Gold Button - draws the eye immediately
  color: '#000', // Black text for high contrast
  padding: '14px 28px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
  boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)' // Subtle glow
};

const secondaryBtnStyle = {
  border: '2px solid #ffffff',
  color: '#ffffff',
  padding: '12px 26px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold'
};

const blobStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  height: '300px',
  backgroundColor: 'rgba(255, 215, 0, 0.1)', // Gold glow behind your image
  borderRadius: '50%',
  filter: 'blur(60px)',
  zIndex: '-1'
};

export default Home;
