import React from 'react'

const FacultyAdvisor = () => {
  return (
    <div>
        <div className="container" id="team">
                            <div className="row justify-content-center team-grp">
                                <div className="col-lg-4 col-md-6 p-5" data-aos="flip-right" data-aos-duration="1000">
                                    <div className="team-1">
                                        <div className="pic">
                                            <img src="../../img/faculty-advisor.jpeg" className="img-fluid" alt="Profile" />
                                        </div>
                                        <div className="team-info">
                                            <h4>Dr. Rohit Tiwari</h4>
                                            <span>Assistant Professor at Madan Mohan Malaviya University of
                                                Technology</span>
                                            <div className="social">
                                                <a href="mailto:" target="_blank">
                                                    <i className="fa-solid fa-envelope"></i>
                                                </a>
                                                <a href="#" target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/in/dr-rohit-tiwari-372571a3/"
                                                    target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default FacultyAdvisor