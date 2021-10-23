import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import ImgMars from "../layout/pictures/spaceship.jpg";
import ProfilePic from "../layout/pictures/blank-profile-picture.png";
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
        <Row>
          <Col>
            <p
              style={{
                textAlign: "center",
                marginLeft: "auto",
                // marginRight: "auto",
                display: "block",
                // paddingTop: "20%",
                // paddingBottom: "20%",
              }}
              class="description-text"
            >
              Take a voyage on the Moon which is one of Earth's closest
              neighbors.Here the lack of an atmosphere means no sound and the
              sky will always be black. The terrain here is rocky and full of
              craters waiting for your discovery.
            </p>
            <p
              style={{
                textAlign: "center",
                // marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                // paddingTop: "10%",
                // paddingBottom: "20%",
              }}
              class="description-text"
            >
              For size comparison, if the Earth was the size of a basketball the
              moon would be the size of a tennis ball. And just like Earth, the
              moon has its own quakes that are caused by the gravitational pull
              from the Earth.
            </p>
          </Col>
          <Col>
            <img
              src={ImgMars}
              alt="photogdgdged"
              style={{
                height: "70%",
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                borderRadius: "30%",
                marginTop: "10%",
              }}
            ></img>
            <Button
              onClick={() => TicketFormpage()}
              as="input"
              type="button"
              value="Book Now"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />{" "}
          </Col>
        </Row>
      </div>
    </>
  );
}
