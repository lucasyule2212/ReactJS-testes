import React from "react";

// import { Container } from './styles';

function About() {
  return (
    <div className="card mb-3">
      <img
        src="\assets\james-harrison-vpOeXr5wmR4-unsplash.jpg"
        className="card-img-top img-fluid"
        alt="coding computer"
      ></img>
      <div className="card-body">
        <h5 className="card-title">About Us</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus
          ligula, finibus a feugiat a, fringilla a massa. Phasellus lobortis
          viverra nisi vitae venenatis. Aliquam lacinia suscipit purus. Aenean
          gravida imperdiet nunc, vitae posuere est lacinia a. Sed ornare arcu
          ut pretium placerat. Nullam nec arcu velit. Donec facilisis nisi ac
          nibh condimentum, et egestas enim lacinia. Nam posuere ex ut nibh
          fermentum, et scelerisque ligula dapibus. Ut vehicula maximus ipsum,
          efficitur sodales orci interdum et.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}

export default About;
