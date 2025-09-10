
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

   
    if (!mobile || !email || !password) {
      alert("Please fill all fields!");
      return;
    }
    if (mobile.length !== 10) {
      alert("Mobile number must be 10 digits");
      return;
    }

    console.log("Signup Data:", { mobile, email, password });
    navigate("/dashboard"); 
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0" 
    }}>
      <form
        onSubmit={handleSignup}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "300px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Signup</h2>

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          maxLength={10}
          style={{ marginBottom: "1rem", padding: "0.5rem", fontSize: "1rem" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.5rem", fontSize: "1rem" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.5rem", fontSize: "1rem" }}
        />

        <button
          type="submit"
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
