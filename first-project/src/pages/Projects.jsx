import React from 'react';
import Card from '../components/Card';

const Projects = () => {
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>My Projects</h1>
            
            <div style={gridStyle}>
                <Card
                    title="Portfolio Website"
                    description="A high-end personal branding site built with React, featuring a Midnight & Gold professional theme."
                    link="https://github.com/shillat/first-project"
                />
                
                <Card
                    title="Alumni Management System"
                    description="A management platform designed to track and connect Alumni, featuring secure data handling."
                    link="https://github.com/shillat/OLD-STUDENTS-ASSOCIATION-MANAGEMENT-SYSTEM.git"
                />

                <Card
                    title="Online Voting System"
                    description="A secure digital voting platform focusing on integrity, transparency, and user-friendly interfaces."
                    link="https://github.com/bos-com/Online-Voting-System.git"
                />
                <Card
    title="Naiga Chatbot"
    description="A sleek, lead-generation interface designed to streamline user inquiries by capturing messages and delivering them directly to a designated email inbox."
    link="https://github.com/shillat/naiga-chatbot" 
/>
            </div>
        </div>
    );
};

// --- Professional Styling Objects ---

const containerStyle = {
    padding: '80px 5%',
    backgroundColor: '#0a0a0a', // Midnight Black
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const titleStyle = {
    color: '#FFD700', // Gold
    fontSize: '2.5rem',
    marginBottom: '50px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textAlign: 'center'
};

const gridStyle = {
    display: 'grid',
    /* This is the 'Magic' line. 
       It creates a side-by-side grid that automatically 
       adjusts based on the screen width.
    */
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1200px'
};

export default Projects;
