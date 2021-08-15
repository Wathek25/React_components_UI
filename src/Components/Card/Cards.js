// import React from "react";
import React, { Component } from "react";
import Card from "../Card/Card";
import image1 from "../Card/Assets/img1.jpg";
import image2 from "../Card/Assets/img2.jpg";
import image3 from "../Card/Assets/img3.jpg";
import image4 from "../Card/Assets/img4.jpg";
import image5 from "../Card/Assets/img5.jpg";
import image6 from "../Card/Assets/img6.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="countainer-fluid d-flex justify-content-center">
        <div className="row">
          <h1 className="mt-4">Our Services</h1>
          <div className="col-md-4">
            <Card
              imgsrc={image1}
              title="Strategy & Insights"
              desc="Actionable insights, people-inspired strategies, and digital solutions that help your brand achieve better business outcomes and limitless possibilities."
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={image2}
              title="Creative & Experience Design"
              desc="People-inspired, accessible, and imaginative design work created with your customers’ needs and preferences top of mind."
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={image3}
              title="Marketing & Communication"
              desc="We work with your brand to build a human-centric marketing model where strategy and technology work together to drive digital marketing solutions."
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={image4}
              title="Technology & Platform Development"
              desc="Building, connecting, and scaling technology in the pursuit of simplified, inventive solutions for your customers and employees alike."
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={image5}
              title="Managed services & Support"
              desc="Always-on managed services and support that ensures smooth operations, minimal downtime, and a better digital experience for your customers and employees."
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={image6}
              title="Corporate Agility & Governance"
              desc="Our custom solutions help your brand become more agile, continuously improve and iterate, and ensure you’re prepared for anything the future has in store."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
