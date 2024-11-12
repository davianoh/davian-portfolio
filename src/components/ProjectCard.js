import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repoUrl }) => {
  const handleClick = () => {
    if (repoUrl) {
      window.open(repoUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div 
        className="proj-imgbx" 
        onClick={handleClick}
        style={{ cursor: repoUrl ? 'pointer' : 'default' }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
