import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Dynamic year

    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="mailto:shillahnaigaga5@gmail.com">Email Me</a>
                <span style={{ color: '#333' }}>|</span>
                <a href="https://github.com/shillat" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span style={{ color: '#333' }}>|</span>
                <a href="https://www.linkedin.com/in/shillah-naigaga-1aa6a832a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3uwgZhWzTuGqi2xLlHjwZQ%3D%3D" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            
            <p style={{ marginTop: '20px', fontSize: '0.85rem', color: '#6c757d', letterSpacing: '1px' }}>
                © {currentYear} SHILLAH NAIGAGA. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
