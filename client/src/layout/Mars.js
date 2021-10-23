import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import "./Mars.css";
import { useHistory } from "react-router-dom";

export default function Mars() {
  const history = useHistory();
  const TicketFormpage = () => {
    history.push("/TicketForm");
  };
  return (
    <Container>
      <div className="mars-bg">
        <Card>
          <Card.Body>
            <Card.Title>Mars</Card.Title>
            <Card.Text>
              Take a voyage on the "Red Planet" where the sunsets are blue and
              the seasons are extreme. Mars is home to a diverse terrain which
              includes ice caps, extinct volcanoes and the Olympus Mons, the
              tallest mountain in the solar system.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mons">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQZItk09reNfQ8uvQWzNysdBQvY4wbhMorQ&usqp=CAU"
          />
          <Card.Body class="card-body">
            <Card.Title>Olympus Mons Resort</Card.Title>
            <Card.Text>
              This Exclusive 8-Diamond Resort will pamper you like no one else.
              Only minutes away from a plethora of advantures.
            </Card.Text>
          </Card.Body>
        </Card>
        <Button
          className="button"
          onClick={() => TicketFormpage()}
          as="input"
          type="button"
          value="Book Now"
        />{" "}
      </div>
    </Container>
  );
}
