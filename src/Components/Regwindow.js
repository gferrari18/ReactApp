import React from "react";
import "../App.css";
import "./Regwindow.css";
import { Button } from "./Button";
import axios from "axios";
import { useRef } from "react";

function Regwindow() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  function Login() {
    var url =
      "https://flask-service.ahu3a22b1c5e8.us-west-2.cs.amazonlightsail.com/login/" +
      inputRef1.current.value +
      "/" +
      inputRef2.current.value +
      "/" +
      inputRef3.current.value;
    axios.get(url);
  }

  return (
    <div className="Regwindow-container">
      <form>
        <div>
          <input
            ref={inputRef1}
            className="Regwindow-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <input
            ref={inputRef2}
            className="Regwindow-input"
            name="Username"
            type="Username"
            placeholder="Your Username"
          />
        </div>
        <div>
          <input
            ref={inputRef3}
            className="Regwindow-input"
            name="Password"
            type="Password"
            placeholder="Your Password"
          />
        </div>
        <div>
          <Button
            onClick={Login}
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Regwindow;
