import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import image from "./image-reviews.jpg";
import userImage from "./user-image.png";
import "./reviews.css";

function Reviews() {
  return (
   
    <CardGroup>
      <Card>
        <div className="image-container">
          <img className="user-image" src={userImage} alt="User" />
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <Card.Title>NameUser</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <div className="image-container">
          <img className="user-image" src={userImage} alt="User" />
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <Card.Title>NameUser</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <div className="image-container">
          <img className="user-image" src={userImage} alt="User" />
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <Card.Title>NameUser</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Reviews;
