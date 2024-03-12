import React, { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/user.png";
import axios from "axios";

function UpdateUser() {
  // const [currentData, setCurrentData] = useState({});
  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    number: "",
    currentPassword: "",
    newPassword: "",
  });
  const [checkError, setcheckError] = useState("");
  const [userID, setUserID] = useState("");
  const navigation = useNavigate();
  // const userID = updateData.userId;
  // console.log("userId", userID);
  // console.log("updateData", updateData);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("userData"));
    console.log(usersData, "userData +++++++");
    if (usersData) {
      console.log(usersData.data, "userData...");

      setUpdateData({
        name: usersData.data.name,
        email: usersData.data.email,
        number: usersData.data.number,
      });
      // setUpdateData(usersData.data);
      setUserID(usersData.data.userId);
      console.log("userId =============== ", usersData.data.userId);
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
    console.log("Signing out...");
  };

  const handleUser = (e) => {
    e.preventDefault();
    let check = formValidations();
    if (Object.keys(check).length > 0) {
      console.log("check with error", check);
    } else {
      axios
        .post("http://localhost:7000/update", {
          data: updateData,
          userID: userID,
        })
        // .post(`http://localhost:7000/update/${userID}`, { data: updateData })
        .then((res) => {
          console.log(res, "response from update");
          alert("User updated successfully");
          navigation("/home");
        })
        .catch((err) => {
          // alert(`${err?.response?.data?.message || err?.response?.message}`);
          console.log(err, "err response from update");
        });
    }
  };

  console.log(updateData, "updateData ============ ");

  const formValidations = (newErrors) => {
    var newErrors = {};
    console.log(
      updateData.name.trim()?.length,
      "updateData.name.length +++++++"
    );
    if (
      !updateData?.name?.length === 0 ||
      updateData?.name?.length === undefined
    ) {
      newErrors.name = "Enter your name";
    }
    if (
      !updateData?.email?.length === 0 ||
      updateData?.email?.length === undefined
    ) {
      newErrors.email = "Enter your email";
    }
    if (
      !updateData?.number?.length === 0 ||
      updateData?.number?.length === undefined
    ) {
      newErrors.number = "Enter your number";
    }

    if (updateData?.newPassword) {
      if (
        !updateData?.currentPassword?.length === 0 ||
        updateData?.currentPassword?.length === undefined
      ) {
        newErrors.currentPassword = "Enter current Password";
      }
      if (
        !updateData?.newPassword?.length === 0 ||
        updateData?.newPassword?.length === undefined
      ) {
        newErrors.newPassword = "Enter new password";
      }
    }

    setcheckError(newErrors);
    return newErrors;
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
              <Form.Label style={{ fontWeight: "bold" }}>
                Current Password
              </Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter current password"
                name="currentPassword"
                value={updateData.currentPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            {checkError.currentPassword && (
              <p style={{ color: "red", textAlign: "left" }}>
                {checkError.currentPassword}
              </p>
            )}
            <Form.Group controlId="password">
              <Form.Label style={{ fontWeight: "bold" }}>
                New Password
              </Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter new password"
                name="newPassword"
                value={updateData.newPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            {checkError.newPassword && (
              <p style={{ color: "red", textAlign: "left" }}>
                {checkError.newPassword}
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
