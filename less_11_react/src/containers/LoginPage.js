import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const nav = useNavigate();
  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem("username", e.target.username.value);
          nav("/");
        }}
      >
        <label className="form_label">Login</label>
        <div className="form_content">
          <input name="username" type="text" placeholder="username..." />
          <button>submit</button>
        </div>
      </form>
    </div>
  );
}
