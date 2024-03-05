import React from "react";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import noPageFoundImage from "../../assets/images/404.jpg";

const NotFoundPage = () => {
  return (
    <div
      className="not-found d-flex justify-content-center align-items-center min-vh-100 w-100"
      style={{ backgroundColor: "black" }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Row
            xs={12}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              src={noPageFoundImage}
              alt="404 Not Found"
              style={{
                height: 200,
                width: 400,
                // borderRadius: "50%",
              }}
            />
            <h1 style={{ color: "white" }}>
              Oops! We can't find the page you're looking for.
            </h1>
            <p style={{ color: "white" }}>
              The requested path may be incorrect, or the page may have been
              removed, moved, or renamed.
            </p>{" "}
          </Row>
        </Row>
        {/* <Button variant="primary" href="/">
          Go to Home Page
        </Button> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="primary" href="/">
            Go to Home Page
          </Button>
        </div>
      </Container>
    </div>

    // <div
    //   className="full-screen d-flex flex-column justify-content-center min-vh-100"
    //   style={{
    //     backgroundImage: `url(${noPageFoundImage})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <Container fluid>
    //     <Row className="justify-content-center">
    //       <Col xs={12} md={6}>
    //         <h1 style={{ color: "white", fontSize: 70 }}>
    //           Oops! We can't find the page you're looking for.
    //         </h1>
    //         <p>
    //           The requested path may be incorrect, or the page may have been
    //           removed, moved, or renamed.
    //         </p>
    //         <Button variant="primary" href="/">
    //           Go to Home Page
    //         </Button>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};

export default NotFoundPage;
