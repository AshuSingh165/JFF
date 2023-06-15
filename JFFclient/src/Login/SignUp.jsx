import React, { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import meet from "../assets/Meet.png";
import Main from "../assets/Main.png";
import { Link } from "react-router-dom";
import { Container, TextField, Button } from "@mui/material";
import axios from "axios";
export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Axios method");
    try {
       await axios.post("http://localhost:8000/api/user", {
        username: name,
        Password: password,
        email: email,
      }).then(function (res){
        console.log(res)
      }).catch(function (res){
        console.log(res)
      })
     
    } catch (error) {
      console.log(error);
    }


  };
  
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
          <form method="post" action="/Login" onSubmit={handleSubmit}>
            <TextField
              id="Username-basic"
              label="Username"
              name="username"
              onChange={(e) => setName(e.target.value)}
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
              name="Password"              

              onChange={(e) => setPassword(e.target.value)}
              variant="filled"
              style={{
                width: "100%",
                margin: "1rem",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            />
            {/* <TextField
              id="Password-basic"
              label="Confirm Password"
              name="Confirm Password"
              onChange={(e) => setCpassword(e.target.value)}
              variant="filled"
              style={{
                width: "100%",
                margin: "1rem",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            /> */}
            <TextField
              id="Email-basic"
              label="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
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
              style={{
                margin: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                size="large"
                variant="contained"
                type="submit"
           
              >
                Sign up
              </Button>
            </div>
          </form>
        </Container>

        <div style={{ borderTop: "1px solid" }}>
          {" "}
          <h5 style={{ color: "white", textAlign: "center" }}>
            Already a user?{" "}
            <Link to={"/Login"} style={{ color: "white" }}>
              Login
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
