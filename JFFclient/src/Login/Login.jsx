import React, { useEffect } from "react";
import axios from "axios";
import meet from "../assets/Meet.png";
import Main from "../assets/Main.png";
import { Link } from "react-router-dom";
import { Container, TextField, Button } from "@mui/material";


export default function Login() {
const GetData = async()=>{
  
  const result = await axios.get("http://localhost:8000/api/user", function(){
    // console.log(result)
  }).then((response)=>{
    return response
  })
  .catch((err)=>{console.log(err)})
}



















  // const getData = async () => {

  //   try {
  //      const data = await axios
  //     .get("http://localhost:8000/api/user")
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data,"data has been fatched form the server");
  //     })
  //   } catch (error) {
  //    console.log(error) 
  //   }
   

  // };
  const handleGetData =()=>{
    return console.log("Data has been retrieved successfully")
  }


  return (
    <div
      className="Home"
      style={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div>
        <div
          className="image"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={meet}
            style={{ width: "100px", height: "100px" }}
            alt="Meeting"
          />
        </div>
        <div
          className="h2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "white" }}>Welcome To This app</h2>
        </div>

        <Container
          maxWidth="sm"
          sx={{ border: "var(--Grid-borderWidth) solid" }}
        >
          <form method="get">
            
          <TextField
            id="Username-basic"
            label="Username"
            variant="filled"
            style={{
              width: "100%",
              margin: "1rem",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          />
          <TextField
            id="Password-basic"
            label="Password"
            variant="filled"
            style={{
              width: "100%",
              margin: "1rem",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            />
        <div
          className="btn"
          style={{ margin: "2rem", display: "flex", justifyContent: "center" }}
          >
          <Button size="large" variant="contained" type="submit" onClick={handleGetData}>
            Login
          </Button>
        </div>
            </form>
        </Container>
        <div style={{ borderTop: "1px solid" }}>
          {" "}
          <h5 style={{ color: "white", textAlign: "center" }}>
            Create new account.{" "}
            <Link to={"/SignUp"} style={{ color: "white" }}>
              Sign Up
            </Link>
          </h5>
        </div>
      </div>
      <div className="main">
        <img src={Main} alt="" style={{ width: "90%", marginLeft: "32px" }} />
      </div>
    </div>
  );
}
