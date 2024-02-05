import React from 'react';
import "./Team.css"
const TeamCard = ({ member }) => {
  return (
    <div className="col-lg-4 col-md-6 p-5" data-aos="flip-right" data-aos-duration="1000">
      <div className="team-1">
        <div className="pic">
          <img src={member.imgLink} className="img-fluid" alt="Profile" />
        </div>
        <div className="team-info">
          <h4>{member.name}</h4>
          <span>{member.position}</span>
          <div className="social">
            <a href={`mailto:${member.gmail}`} >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href={member.insta} >
              <i className="fab fa-instagram"></i>
            </a>
            <a href={member.linkedin}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
