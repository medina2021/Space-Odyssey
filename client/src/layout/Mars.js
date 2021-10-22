import React from "react";
import { Button } from "react-bootstrap";
import "./Mars.css";
import { useHistory } from "react-router-dom";

export default function Mars() {
  const history = useHistory();
  const TicketFormpage = () => {
    history.push("/TicketForm");
  };
  return (
    <>
      <div class="mars-bg">
        <Button
          onClick={() => TicketFormpage()}
          as="input"
          type="button"
          value="Input"
        />{" "}
      </div>
    </>
  );
}
