import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo Section */}
                <h2 className="logo">
                    <Link to="/" className="logo-link">
                        Shillah Naigaga
                    </Link>
                </h2>

                {/* Navigation Links */}
                <div className="nav-links">
                    {/* Internal Page Links */}
                    <div className="page-links">
                        <Link to="/" className="nav-item">HOME</Link>
                        <Link to="/about" className="nav-item">ABOUT</Link>
                        <Link to="/projects" className="nav-item">PROJECTS</Link>
                    </div>

                    {/* Decorative Divider */}
                    <span className="nav-divider">|</span>

                    {/* External Social Links */}
                    <div className="social-links">
                        <a 
                            href="https://github.com/shillat" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="nav-item social-item"
                        >
                            GITHUB
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/shillah-naigaga-1aa6a832a/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="nav-item social-item"
                        >
                            LINKEDIN
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
