import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!email || !password) {
          setError("Email and password are required!");
          setMessage(""); // Clear success message
          return;
      }
  
      try {
          const response = await fetch("http://localhost:5000/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include", 
              body: JSON.stringify({ email, password }),
          });
  
          const data = await response.json();
  
          if (!response.ok) {
              setError(data.message);
              setMessage(""); // Clear success message
          } else {
              setMessage("Login successful!");
              setError("");
          }
      } catch (error) {
          setError("Something went wrong. Please try again.");
          setMessage(""); // Clear success message
      }
  };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                <h2 className="text-center text-primary">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {message && <div className="alert alert-success">{message}</div>}
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
