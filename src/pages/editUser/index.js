import React, { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/user.png";

function UpdateUser() {
  const [currentData, setCurrentData] = useState({});
  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [checkError, setcheckError] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("userData"));
    if (usersData) {
      console.log(usersData.data, "userData...");
      setUpdateData(usersData.data);
      // setCurrentData(usersData.data);
    } else {
      console.log("userData is empty");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("ontype", name, "============", value);
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  const handleSignOut = () => {
    // navigation("/signin");
    console.log("Signing out...");
  };

  const handleUser = () => {
    formValidations();
  };

  const formValidations = () => {
    console.log("formValidations");
    let newErrors = {};
    if (!updateData.name.length > 0) {
      newErrors.name = "Enter your name";
    }
    if (!updateData.email.length > 0) {
      newErrors.email = "Enter your email";
    }
    if (!updateData.number.length > 0) {
      newErrors.number = "Enter your number";
    }
    if (!updateData.password.length > 0) {
      newErrors.password = "Enter your password";
    }
    setcheckError(newErrors);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div
        style={{
          border: "1px solid lightgray",
          width: 400,
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f1f3f9",
          alignContent: "center",
          padding: 10,
        }}
      >
        <h3 style={{ textAlign: "center" }}>Edit Profile</h3>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              overflow: "hidden",
              marginBottom: "20px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={userIcon}
              alt="Profile"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form
            style={{
              width: "300px",
            }}
          >
            <Form.Group controlId="name">
              <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter your name"
                name={"name"}
                value={updateData.name}
                onChange={handleChange}
              />
              {checkError.name && (
                <p style={{ color: "red", textAlign: "left" }}>
                  {checkError.name}
                </p>
              )}
            </Form.Group>
            <br />
            <Form.Group controlId="email">
              <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter your email"
                name="email"
                value={updateData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            {checkError.email && (
              <p style={{ color: "red", textAlign: "left" }}>
                {checkError.email}
              </p>
            )}
            <Form.Group controlId="phone">
              <Form.Label style={{ fontWeight: "bold" }}>Phone</Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter your mobile no"
                name="number"
                value={updateData.number}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            {checkError.number && (
              <p style={{ color: "red", textAlign: "left" }}>
                {checkError.number}
              </p>
            )}
            <Form.Group controlId="password">
              <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter your password"
                name="password"
                value={updateData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            {checkError.password && (
              <p style={{ color: "red", textAlign: "left" }}>
                {checkError.password}
              </p>
            )}
          </Form>

          <div
            style={{
              display: "flex",
              marginTop: 10,
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
            <Button
              variant="secondary"
              style={{ width: 100 }}
              onClick={() => navigation(-1)}
            >
              Back
            </Button>
            <Button
              variant="success"
              style={{ width: 100 }}
              onClick={handleUser}
            >
              Save
            </Button>
            <Button
              variant="danger"
              style={{ width: 100 }}
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
