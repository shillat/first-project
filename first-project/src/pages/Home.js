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
                src="./hero-illustration.svg" 
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
  backgroundColor: '#ffffff'
};

const contentLayout = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '40px',
  flexWrap: 'wrap'
};

const textSectionStyle = {
  flex: '1.2',
  minWidth: '320px',
  textAlign: 'left'
};

const badgeStyle = {
  color: '#61dafb',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: 'bold',
  fontSize: '0.8rem',
  marginBottom: '1rem'
};

const headlineStyle = {
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  lineHeight: '1.1',
  margin: '0 0 1.5rem 0',
  color: '#222'
};

const subTextStyle = {
  fontSize: '1.2rem',
  color: '#555',
  lineHeight: '1.6',
  marginBottom: '2.5rem',
  maxWidth: '550px'
};

const buttonGroupStyle = {
  display: 'flex',
  gap: '15px'
};

const visualSectionStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
};

const illustrationContainer = {
  position: 'relative',
  zIndex: '2'
};

const blobStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  height: '300px',
  backgroundColor: 'rgba(97, 218, 251, 0.1)',
  borderRadius: '50%',
  filter: 'blur(40px)',
  zIndex: '-1'
};

const primaryBtnStyle = {
  backgroundColor: '#222',
  color: '#fff',
  padding: '14px 28px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: '0.3s'
};

const secondaryBtnStyle = {
  border: '2px solid #222',
  color: '#222',
  padding: '12px 26px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default Home;
