// Card.jsx
import './Card.css';

const Card = ({ title, description, link }) => {
    return (
        <div className="card">
            {/* Added specific classes so we can target them in CSS */}
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn-project">
                    View Project →
                </a>
            )}
        </div>
    );
};

export default Card;
