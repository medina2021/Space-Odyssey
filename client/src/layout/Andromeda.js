import React from "react";
import FlightForm from "../components/FlightForm";
import "./Andromeda.css";
import Stripe from "../components/stripe";

export default function Andromeda() {
  return (
    <div class="andromeda-bg">
      <h1 class="title">Andromeda</h1>
      <p class="description-text">
        Take a voyage on the "Red Planet" where the sunsets are blue and the
        seasons are extreme. Mars is home to a diverse terrain which includes
        ice caps, extinct volcanoes, ice caps and Olympus Moons, the tallest
        mountain in the solar system.
      </p>
      <Stripe className="strype" />
    </div>
  );
}
