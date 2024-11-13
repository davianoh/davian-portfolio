import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, category, site, imgUrl, repoUrl }) => {
  const handleClick = () => {
    if (repoUrl) {
      window.open(repoUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div 
        className="project-card-container"
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
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{category}</h4>
            <span>- {site} -</span>
          </div>
        </div>
        <div className="project-info">
          <h5 className="project-title">{title}</h5>
        </div>
      </div>
    </Col>
  )
}
