import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import userIcon from "../../assets/images/user.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation({ name }) {
  const currentUser = useSelector((state) => state.user.userReducer);
  const navigation = useNavigate();

  return (
    <Navbar
      className="justify-content-between"
      // style={{
      //   backgroundColor: "transparent",
      //   paddingTop: "10px",
      // }}
      style={{
        display: "flex",
        position: "absolute",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingTop: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        // zIndex: 10,
      }}
    >
      <Navbar.Brand
        onClick={() => navigation("/home")}
        style={{ cursor: "pointer", color: "white", fontWeight: "bold" }}
      >
        Header
      </Navbar.Brand>
      <Nav>
        <Nav.Link
          onClick={() => navigation("/contact")}
          style={{ color: "white", fontWeight: "bold" }}
        >
          Contact
        </Nav.Link>
        <Nav.Link
          onClick={() => navigation("/services")}
          style={{ color: "white", fontWeight: "bold" }}
        >
          Services
        </Nav.Link>
        <Nav.Link
          onClick={() => navigation("/home")}
          style={{ color: "white", fontWeight: "bold" }}
        >
          Home
        </Nav.Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={userIcon}
            alt="user-icon"
            style={{ height: "30px", cursor: "pointer" }}
            onClick={() => navigation("/updateuser")}
          />
          <Nav.Link
            onClick={() => navigation("/updateuser")}
            style={{ color: "white", fontWeight: "bold", marginLeft: "5px" }}
          >
            {name ? name : currentUser && currentUser?.name}
          </Nav.Link>
        </div>
      </Nav>
    </Navbar>
  );
}

export default Navigation;

// import React from "react";
// import userIcon from "../../assets/images/user.png";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Navigation({ name }) {
//   const currentUser = useSelector((state) => state.user.userReducer);
//   const navigation = useNavigate();
//   return (
//     <div
//       style={{
//         display: "flex",
//         position: "absolute",
//         flexDirection: "row",
//         width: "100%",
//         justifyContent: "space-between",
//         paddingTop: "10px",
//         backgroundColor: "rgba(255, 255, 255, 0.3)",
//         // zIndex: 10,
//       }}
//     >
//       <div>
//         <h4
//           style={{
//             cursor: "pointer",
//             fontFamily: "serif",
//             fontWeight: "bold",
//             color: "white",
//           }}
//         >
//           Header
//         </h4>
//       </div>

//       <div
//         style={{
//           width: "30%",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-around",
//           fontFamily: "serif",
//           fontWeight: "bold",
//         }}
//       >
//         <h4 style={{ fontWeight: "bold", color: "white" }} className="title">
//           Contact
//         </h4>
//         <h4 style={{ fontWeight: "bold", color: "white" }} className="title">
//           Services
//         </h4>
//         <h4 style={{ fontWeight: "bold", color: "white" }} className="title">
//           Home
//         </h4>
//         <div
//           // onClick={() => navigation("/updateuser")}
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* <h4 style={{ fontWeight: "bold", color: "white" }} className="title">
//             Account
//           </h4> */}
//           <img
//             src={userIcon}
//             alt="user-icon"
//             style={{ height: "30px" }}
//             onClick={() => navigation("/updateuser")}
//           />
//           <h4 style={{ fontWeight: "bold", color: "white" }} className="title">
//             {name ? name : currentUser && currentUser?.name}
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navigation;
