import React from "react";
import "./Login.css"
function Login() {
  return (
    <div class = "main">
      <form>
        <section class="container">
          <header>
            <h1>Log In to ProjectPartner</h1>
          </header>
          <hr></hr>
          <hr></hr>
          <p>
            <label for="email">E-Mail</label>
            <br></br>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="youremail@gmail.com"
            />
          </p>
          <p>
            <label for="password">Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="*******"
            />
          </p>
        </section>
      </form>
    </div>
  );
}

export default Login;
