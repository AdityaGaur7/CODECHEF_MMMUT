import React from 'react';
import "./About.css";

const Cards = () => {
  const workflowsData = [
    {
      image: "img/four.webp",
      title: "That Work",
      description: "I'm a paragraph. Click here to add your own text ",
    },
    {
      image: "img/two.webp",
      title: "All-In-One Solution",
      description: "I'm a paragraph. Click here to add your ",
    },
    {
      image: "img/three.webp",
      title: "Comprehensive Customer Support",
      description: "I'm a paragraph. Click here to add your own ",
    },
    {
      image: "img/one.webp",
      title: "Smart Automation Tools",
      description: "I'm a paragraph. Click here to add your own ",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {workflowsData.map((workflow, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card scale-on-hover">
              <img src={workflow.image} className="card-img-top" alt={workflow.title} />
              <div className="card-body">
                <h5 className="card-title">{workflow.title}</h5>
                <p className="card-text">{workflow.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;