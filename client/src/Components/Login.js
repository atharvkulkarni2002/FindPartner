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
          <p>
            <label for="email">E-Mail</label>
            <br></br>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="youremail@gmail.com"
              autoComplete="off"
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
              autoComplete="off"
            />
          </p>
          <p>
            <input
              type="button"
              name="button"
              id="btn"
              value="SUBMIT"
            />
          </p>
        </section>
      </form>
    </div>
  );
}

export default Login;
