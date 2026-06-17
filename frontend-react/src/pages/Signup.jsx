import { useState } from "react";
import { signup } from "../services/userService";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  async function handleSignup(event) {

    event.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {

      alert("Please fill all fields");

    }

    else if (password !== confirmPassword) {

      alert("Passwords do not match");

    }

    else {

      try {

  const newUser = {
    name,
    email,
    password
  };

  await signup(newUser);

  alert("Signup successful");

} catch (error) {

  console.error(error);
  alert("Signup failed");

}

    }

  }



  return (

    <main className="auth-page">

      <section className="auth-card">

        <h1 className="app-title">
          Productivity Manager
        </h1>

        <form onSubmit={handleSignup}>

          <div className="form-group">

            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

          </div>



          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

          </div>



          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >

              {showPassword ? "Hide" : "Show"}

            </button>

          </div>



          <div className="form-group">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >

              {showConfirmPassword ? "Hide" : "Show"}

            </button>

          </div>



          <button type="submit" className="primary-button">
            Signup
          </button>

        </form>

      </section>

    </main>

  );

}

export default Signup;