import React from "react";
import "../App.css";
import "./Regwindow.css";
import { Button } from "./Button";

function Regwindow() {
  return (
    <div className="Regwindow-container">
      <form>
        <div>
          <input
            className="Regwindow-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <input
            className="Regwindow-input"
            name="Username"
            type="Username"
            placeholder="Your Username"
          />
        </div>
        <div>
          <input
            className="Regwindow-input"
            name="Password"
            type="Password"
            placeholder="Your Password"
          />
        </div>
        <div>
          <Button buttonStyle="btn--outline">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Regwindow;
