import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// import { FetchUserData } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import LoginUserData from "../../redux/actions";
// import { userName } from "../../redux/reducer";

function Login() {
  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const [validations, setValidations] = useState({});
  const navigation = useNavigate();
  //redux
  const currentUser = useSelector((state) => state.user.userReducer);

  console.log(currentUser, "currentUser dataaaaa✨✨✨");

  const dispatch = useDispatch();

  console.log("Login page....");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   console.log("function called");

  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   console.log("coming function");

  //   try {
  //     const res = await FetchUserData({}, { user: "anand" }, {});

  //     if (res) {
  //       console.log("FetchUserData----", res);
  //     } else {
  //       console.log("FetchUserData-");
  //     }
  //   } catch (err) {
  //     console.log(err, "error try");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let check = formValidations();
    if (Object.keys(check).length > 0) {
      console.log(check, "please fill all the field...");
    } else {
      axios
        .post("http://localhost:7000/login", { data: inputValues })
        .then((response) => {
          console.log(response.data, "ccccccccccccccc 💚💚💚");
          // alert("login success 💚💚💚");

          dispatch(LoginUserData(response?.data));
          localStorage.setItem("userData", JSON.stringify(response?.data));
          navigation("/home");
        })
        .catch((error) => {
          alert(error.response.data || `Password not found`);
          // console.log(error, "Login Error");
        });
    }
  };

  const formValidations = (newErrors) => {
    var newErrors = {};
    if (!inputValues.email.length > 0) {
      newErrors.email = "Enter email";
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
              LOGIN
            </h2>

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
              <Link style={{ textDecoration: "none" }}>Forgot password?</Link>
            </div>
            <br />
            <div>
              <p>
                You don't have an account?
                <Link to="/register" style={{ textDecoration: "none" }}>
                  {" "}
                  Sign up
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
                {/* <Button
                onClick={() => dispatch(userName())}
                variant="primary"
                type="submit"
              > */}
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
