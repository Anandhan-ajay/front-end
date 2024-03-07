import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [validations, setValidations] = useState({});
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let check = formValidations();
    if (Object.keys(check).length > 0) {
      console.log("with error", check);

      // console.log(check, "please fill all the field...");
    } else {
      axios
        .post("http://localhost:7000/reg", { data: inputValues })
        .then((res) => {
          console.log(res, "res... form submitted successfully 💚");
          alert("Register successfully...");
          navigation("/");
        })
        .catch((err) => {
          console.log(err, "err...");

          alert(`${err.response.data.message || err.message} ❌❌❌`);
        });

      console.log("ready to submit");
    }
  };

  const formValidations = (newErrors) => {
    var newErrors = {};

    if (!inputValues.name.length > 0) {
      newErrors.name = "Enter name";
    }
    if (!inputValues.email.length > 0) {
      newErrors.email = "Enter email";
    }
    if (!inputValues.number.length > 0) {
      newErrors.number = "Enter number";
    }
    if (!inputValues.password.length > 0) {
      newErrors.password = "Enter password";
    }

    setValidations(newErrors);
    return newErrors;
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col sm={12} md={8} lg={4}>
          <Form
            style={{
              boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)",
              padding: "30px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <h2
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 3,
                fontWeight: "revert",
              }}
            >
              REGISTER
            </h2>

            <Form.Group controlId="formBasicName" className="mb-3">
              <div style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Name<span style={{ color: "red" }}> *</span>
                </Form.Label>
              </div>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter name"
                name="name"
                value={inputValues.name}
                onChange={handleChange}
              />
              {validations.name && (
                <p style={{ color: "red", textAlign: "left" }}>
                  {validations.name}
                </p>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <div style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Email<span style={{ color: "red" }}> *</span>
                </Form.Label>
              </div>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="email"
                placeholder="Enter email"
                name="email"
                value={inputValues.email}
                onChange={handleChange}
              />
              {validations.email && (
                <p style={{ color: "red", textAlign: "left" }}>
                  {validations.email}
                </p>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPhone" className="mb-3">
              <div style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Phone<span style={{ color: "red" }}> *</span>
                </Form.Label>
              </div>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter phone number"
                name="number"
                value={inputValues.number}
                onChange={handleChange}
              />
              {validations.number && (
                <p style={{ color: "red", textAlign: "left" }}>
                  {validations.number}
                </p>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <div style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Password<span style={{ color: "red" }}> *</span>
                </Form.Label>
              </div>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="password"
                placeholder="Password"
                name="password"
                value={inputValues.password}
                onChange={handleChange}
              />
              {validations.password && (
                <p style={{ color: "red", textAlign: "left" }}>
                  {validations.password}
                </p>
              )}
            </Form.Group>
            <div>
              <p>
                Already have an account?
                <Link to="/" style={{ textDecoration: "none" }}>
                  {" "}
                  Login
                </Link>
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button onClick={handleSubmit} variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
