import React,{useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const [userEmail,setuserEmail]=useState("");
  const [userPassword,setuserPassword]=useState("");
  const createinfo=()=>{
    Axios.post("http://localhost:3001/createinfo",{
    userEmail: userEmail,
    userPassword: userPassword,
    });  
  }

  return (
    <div className="main">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <form>
        <section className="container">
          <header>
            <h1>Log In to ProjectPartner</h1>
          </header>
          <p>
            <label htmlFor="email">E-Mail</label>
            <br></br>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="📧"
              autoComplete="off"
              onChange={(event)=>{
                setuserEmail(event.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <br></br>
            
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="&#128274;"
              autoComplete="off"
              onChange={(event)=>{
                setuserPassword(event.target.value);
              }}
              />
          </p>
          <p>
            <input type="button" name="button" id="btn" value="Login" onClick={createinfo}/>
            <Link to={'/signup.js'}>signup</Link>
          </p>
        </section>
      </form>
    </div>
  );
}

export default Login;
