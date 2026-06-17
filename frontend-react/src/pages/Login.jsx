import { useState } from "react";
import { login } from "../services/userService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);



  async function handleLogin(event) {

    event.preventDefault();

    if (email === "" || password === "") {

      alert("Please fill all fields");

    }

    else {

      try {

  const user = await login({
    email,
    password
  });
  console.log("User from backend:", JSON.stringify(user));

  if (user) {

  localStorage.setItem("userId", user.id);
  localStorage.setItem("userEmail", user.email);
   console.log("Stored userId:", localStorage.getItem("userId"));
  alert("Login successful");
  navigate("/dashboard");

} else {

  alert("Invalid credentials");

}

} catch (error) {

  console.error(error);
  alert("Login failed");

}

    }

  }



  return (

    <main className="auth-page">

      <section className="auth-card">

        <h1 className="app-title">
          Productivity Manager
        </h1>

        <form onSubmit={handleLogin}>

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
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button type="button" 
            onClick={() => setShowPassword(!showPassword)}
            >

             {showPassword ? "Hide" : "Show"}

            </button>

          </div>



          <button type="submit" className="primary-button">
            Login
          </button>

          </form>
          <p>
          Don't have an account? <a href="/signup">Signup</a>
      </p>

      

      </section>

    </main>

  );

}

export default Login;