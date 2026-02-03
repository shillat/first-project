import React from 'react';

const About = () => {
    return (
        <div className="about-page" style={pageStyle}>
            {/* Main Container Wrapper */}
            <div className="about-card-container" style={containerStyle}>
                
                <h1 style={headerStyle}>About Me</h1>
                
                <div className="about-content" style={layoutStyle}>
                    
                    {/* Left Side: Profile Image */}
                    <div className="about-image-wrapper" style={imageWrapperStyle}>
                        <img 
                            src="./profile-pic.jpg" 
                            alt="Shillah Naigaga" 
                            style={imageStyle} 
                        />
                        
                    </div>

                    {/* Right Side: Professional Bio */}
                    <div className="about-text" style={textColumnStyle}>
                        <p style={paragraphStyle}>
                            I am <span style={{color: '#FFD700', fontWeight: 'bold'}}>Shillah Naigaga</span>, a dedicated Software Engineering student with a deep passion for building 
                            robust and intuitive web experiences. My technical focus lies primarily in <strong>front-end development</strong>, 
                            where I enjoy merging creative design with clean, functional code.
                        </p>

                        <p style={paragraphStyle}>
                            I specialize in the <strong>JavaScript ecosystem</strong>, utilizing <strong>React</strong> to  
                            create modern, dynamic user interfaces. Beyond the client-side, I also pursue backend development with 
                            strong interests in <strong>Node.js</strong> and <strong>Java</strong>.
                        </p>
                        
                        <p style={paragraphStyle}>
                            As a <strong>strategic leader</strong>, I believe that great software isn't just written—it's led. 
                            I streamline development workflows through <strong>CI/CD automation</strong> and translate complex technical requirements into actionable team goals.
                        </p>
                        
                        <div className="expertise-section" style={{ marginTop: '2.5rem' }}>
                            <h3 style={{ color: '#FFD700', marginBottom: '1rem' }}>Technical Expertise</h3>
                            <div style={badgeContainerStyle}>
                                {['React.js', 'Node.js', 'Java', 'CI/CD', 'Git', 'CSS3'].map((skill) => (
                                    <span key={skill} style={badgeStyle}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="design-section" style={{ marginTop: '2.5rem' }}>
    <h3 style={{ color: '#FFD700', marginBottom: '1rem' }}>Design & Documentation</h3>
    <p style={{ ...paragraphStyle, fontSize: '0.95rem', marginBottom: '1rem' }}>
        I create comprehensive technical reports, system architectures, and UI/UX prototypes. 
        You can view my design work and project documentation here:
    </p>
    <div style={badgeContainerStyle}>
        <a 
            href="https://www.canva.com/design/DAG44kBXAFQ/uCvk8T_BQPCEQI1sqDEAJA/edit?utm_content=DAG44kBXAFQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={canvaLinkStyle}
        >
            View Design Reports (Canva) ↗
        </a>
        <a 
            href="https://drive.google.com/file/d/1_KpM5-nWD5nlT6NH6zv1DvnxHVqdEYIl/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={canvaLinkStyle}
        >
            System Documentation ↗
        </a>
    </div>
</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Styles ---

const pageStyle = {
    backgroundColor: '#0a0a0a', // Midnight background
    minHeight: '100vh',
    padding: '100px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const containerStyle = {
    maxWidth: '1100px',
    backgroundColor: '#141414', // Slightly lighter charcoal
    padding: '3rem',
    borderRadius: '20px',
    border: '1px solid #333',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
};

const headerStyle = {
    color: '#FFD700', // Gold title
    fontSize: '2.5rem',
    marginBottom: '3rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    borderBottom: '2px solid #FFD700',
    display: 'inline-block',
    paddingBottom: '10px'
};

const layoutStyle = {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    flexWrap: 'wrap'
};

const imageWrapperStyle = {
    flex: '1',
    minWidth: '300px',
    position: 'relative'
};

const imageStyle = {
    width: '100%',
    borderRadius: '15px',
    filter: 'grayscale(20%)',
    border: '2px solid #333',
    zIndex: '2',
    position: 'relative'
};

const textColumnStyle = {
    flex: '1.5',
    minWidth: '300px'
};

const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#e0e0e0', // Soft white for readability
    marginBottom: '1.5rem'
};

const badgeContainerStyle = {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
};

const badgeStyle = {
    background: 'rgba(30, 144, 255, 0.1)', // Subtle Blue background
    color: '#1e90ff', // Vivid Blue text
    border: '1px solid #1e90ff',
    padding: '6px 18px',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    transition: '0.3s'
};
const canvaLinkStyle = {
    display: 'inline-block',
    background: 'transparent',
    color: '#FFD700', // Gold to match your theme
    border: '1px solid #FFD700',
    padding: '8px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    transition: '0.3s',
    cursor: 'pointer'
};

// Add a hover effect in your mind (or use a class) 
// so it glows when users point at it!
export default About;
