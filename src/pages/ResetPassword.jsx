import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const API_URL = process.env.REACT_APP_API_URL;
  const handleResetPassword = async () => {
    const token = searchParams.get("token");
    const email = "jr.vishalcrinigertech19@gmail.com"; // Hardcoded for this example
    try {
      const response = await axios.post(API_URL+"reset-password", {
        email,
        token,
        newPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error resetting password.");
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
