import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import homeScreen from "../../assets/videos/homeScreen.mp4";
import { useSelector } from "react-redux";

function Home() {
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const currentUser = useSelector((state) => state.user.userReducer);

  const homePageVideo = homeScreen;

  console.log(currentUser, "currentUser...");

  useEffect(() => {
    console.log("checkHome...");
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
      setUserData(storedUserData);
      setName(storedUserData?.data?.name);
    }
  }, []);

  console.log(userData, "checkHomelast...");
  return (
    <>
      <Navigation name={name} />
      <div
        // style={{
        //   position: "relative",
        //   height: "100vh",
        // }}
        style={{
          display: "flex",
          // position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // height: "100vh",

            // width: "100vw",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source
            src={homePageVideo}
            // src="https://player.vimeo.com/external/457015130.sd.mp4?s=7331a5cffb8c00ee878ffee6cf0c1b89c5a3cd38&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          {/* Add additional source elements for other video formats if needed */}
        </video>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#fff",
            zIndex: 1,
            position: "relative",
          }}
        >
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: 80,
              fontWeight: "bold",
            }}
          >
            Hello , {name ? name : currentUser && currentUser?.name} 💚{" "}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
