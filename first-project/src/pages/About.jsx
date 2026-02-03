// src/pages/About.jsx

const About = () => {
    return (
        <div className="about-container" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ borderBottom: '2px solid #61dafb', display: 'inline-block', marginBottom: '2rem' }}>About Me</h1>
            
            <div className="about-layout" style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                
                {/* Image Column */}
                <div className="about-image" style={{ flex: '1', minWidth: '300px' }}>
                    <img 
                        src="./profile-pic.jpg" 
                        alt="Shillah Naigaga" 
                        style={{ 
                            width: '100%', 
                            borderRadius: '15px', 
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            border: '1px solid #ddd'
                        }} 
                    />
                </div>

                {/* Text Column */}
                <div className="about-text" style={{ flex: '2', minWidth: '300px' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        I am <strong>Shillah Naigaga</strong>, a dedicated Software Engineering student with a deep passion for building 
                        robust and intuitive web experiences. My technical focus lies primarily in <strong>front-end development</strong>, 
                        where I enjoy merging creative design with clean, functional code.
                    </p>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        I am enthusiastic about the <strong>JavaScript ecosystem</strong>, specializing in <strong>React</strong> for 
                        creating modern, dynamic user interfaces. Beyond the client-side, I also pursue backend development with 
                        strong interests in <strong>Node.js</strong> and <strong>Java</strong>.
                    </p>
                    
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.2rem', color: '#555' }}>
                        Beyond technical implementation, I am a <strong>strategic leader</strong>. I believe that great software isn't just written—it's led. 
                        I encompass technical skills into leadership by fostering collaborative environments, streamlining development workflows 
                        through <strong>CI/CD automation</strong>, and translating complex technical requirements into actionable team goals.
                    </p>
                    
                    <div className="skills-expertise" style={{ marginTop: '2rem' }}>
                        <h3>Technical Expertise</h3>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '1rem' }}>
                            {['React.js', 'Node.js', 'Java', 'CI/CD'].map((skill) => (
                                <span key={skill} style={{ 
                                    background: '#61dafb', 
                                    color: '#fff',
                                    padding: '5px 15px', 
                                    borderRadius: '20px', 
                                    fontWeight: 'bold',
                                    fontSize: '0.8rem' 
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
