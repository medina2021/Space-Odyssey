import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import "./Andromeda.css";
import { useHistory } from "react-router-dom";

export default function Andromeda() {
  const history = useHistory();
  const TicketFormpage = () => {
    history.push("/TicketForm");
  };
  return (
    <Container>
      <div className="andromeda-bg">
        <Card>
          <Card.Body>
            <Card.Title>Andromeda</Card.Title>
            <Card.Text>
              Take a voyage on the famous barred spiral galaxy approximately
              million light-years from Earth. This galaxy is known for having
              twice as many stars and is 25% to 50% more massive than the Milky
              Way.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="a-galaxy">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1487715433499-93acdc0bd7c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuZHJvbWVkYSUyMGdhbGF4eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          />
          <Card.Body class="card-body">
            <Card.Title>Andromeda Galaxy</Card.Title>
            <Card.Text>
              View the night sky like never before. Stargazers dream.
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
