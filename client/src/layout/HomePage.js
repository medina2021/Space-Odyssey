import React, { useEffect, useState } from "react";
import { Carousel, Container, Image, Card } from "react-bootstrap";
import "./Homepage.css";

export default function HomePage() {
  return (
    <Container>
      <div class="homepage-bg">
        <div className="row">
          <div className="col-md-6">
            <Card className="header">
              <Card.Body>
                Explore the most amazing worlds across the universe onboard the
                luxurious and most advanced star-cruisers.
              </Card.Body>
              <Image
                className="logo"
                src="https://www.svgrepo.com/show/55597/spaceship.svg"
              />
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="header">
              <Card.Body>
                <span class="offer">Year End Special!!</span> <br />
                Cruises starting at $99,000.00*
              </Card.Body>
            </Card>
          </div>
        </div>
        <Carousel fade className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1579935110378-81262796945f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNwYWNlc2hpcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>USS Terra I</h3>
              <p>Tour the stars in luxury onboard our most advance spaceship</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1578374173713-32f6ae6f3971?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYWNlc2hpcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>USS Luna II- Moon Cruiser</h3>
              <p>
                Buiseness trip? Travel to the Moon onboard our nuclear-fussion
                powered craft and be back home before Dinner
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNwYWNlJTIwdHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Amazing New Worlds!!</h3>
              <p>
                Travel to the Andromeda Galaxy and wonder at the most
                expectacular sights in the Universe.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>Martian Adventures</h3>
              <p>Off-roading on Martian craters!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1537819191377-d3305ffddce4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNwYWNlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Stargazers Paradise</h3>
              <p>View spactacular night skies from Mars Victoria crater</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="disclosure">
        <p>
          *Offer valid for members only. <br />
          Offer expires Dec. 31, 2021. Moor tour class-C section
        </p>
      </div>
    </Container>
  );
}
