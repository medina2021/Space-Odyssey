import React from "react";
import { Button } from "react-bootstrap";
import "./Moon.css";
import { useHistory } from "react-router-dom";

export default function Moon() {
  const history = useHistory();
  const TicketFormpage = () => {
    history.push("/TicketForm");
  };
  return (
    <>
      <div class="moon-bg">
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
