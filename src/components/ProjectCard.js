import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, category, img, link }) => {

  const gotoLink = () =>{
    window.open(
      link, "_blank");
  }

  return (
    <Col size={12} sm={6} md={4}>
      <div onClick={gotoLink} className="proj-imgbx">
        <img src={img} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{category}</span>
        </div>
      </div>
    </Col>
  )
}
