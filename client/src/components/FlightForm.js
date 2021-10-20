import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { REGISTER_FORM } from "../utils/mutations";

export default function FlightForm() {
  const [registerForm, { error }] = useMutation(REGISTER_FORM);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [address, setAddress] = useState("");
  const [AreaCode, setAreaCode] = useState("");
  const [State, setState] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const register = async () => {
    if (FirstName === "" || LastName === "" || emailAddress === "") {
      alert("Must fill all inputs");
    } else {
      try {
        const { data } = await registerForm({
          variables: {
            FirstName: FirstName,
            LastName: LastName,
            address: address,
            Areacode: AreaCode,
            state: State,
            PhoneNumber: PhoneNumber,
          },
        });
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <>
      <div>
        <Form variant="light" bg="light" expand="lg" style={{ color: "white" }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              onChange={(e) => setFirstName(e.target.value)}
              type="Name"
              placeholder="jose"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              onChange={(e) => setLastName(e.target.value)}
              type="lastName"
              placeholder="lopez"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmailAddress(e.target.value)}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={(e) => setAddress(e.target.value)}
              type="address"
              placeholder="48482 mover dr"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>AreaCode</Form.Label>
            <Form.Control
              onChange={(e) => setAreaCode(e.target.value)}
              type="AreaCode"
              placeholder="92536"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>State</Form.Label>
            <Form.Control
              onChange={(e) => setState(e.target.value)}
              type="State"
              placeholder="CA"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>PhoneNumber</Form.Label>
            <Form.Control
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="phoneNumber"
              placeholder="(***)***-****"
            />
          </Form.Group>
          <Button variant="primary" onClick={(e) => register(e)}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
