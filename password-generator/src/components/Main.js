import React, { useState } from "react";
import "../style.css";

const Main = () => {
  const [password, setPassword] = useState("");
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = () => {
    setIsCopy(true);
  };

  return (
    <>
      <div className="container">
        <h1 style={{ color: "#dfd3c3" }}>
          Generate Random Password Using Alphabets, Numbers and Special
          Characters
        </h1>
        <div className="pg_container">
          <div className="pg-container-1">
            <input
              type="text"
              placeholder="new password"
              value={password}
            ></input>
            <div className="buttonsWrapper">
              <div className="copy-container">
                <button className="copy-button copy-image"></button>
                <span className="message">Copy</span>
              </div>
              <div className="refresh-container">
                <button className="refresh-button refresh-image"></button>
                <span className="message">Generate a new password</span>
              </div>
            </div>
          </div>
          {/* <br/><br/> */}
          <div className="pg-container-2">
            <h3 className="custom-title">Customize your password</h3>
            <div className="custom-range-wrapper">
              <label className="custom-range-label" for="password-length">Password Length</label>
              <div className="custom-range-inner">
                <input
                  type="number"
                  name="length"
                  step="1"
                  min="0"
                  max="100"
                  className="custom-range-number"
                  id="password-length"
                  value="12"
                  readonly
                ></input>
                <div className="custom-range-range">
                  <div className="custom-range-range-bar">
                    <div
                      className="custom-range-range-value"
                      style={{ width: "128px" }}
                    ></div>
                    <button
                      className="custom-range-range-slider"
                      style={{ transform: "translate(112px)" }}
                    ></button>
                  </div>
                </div>
              </div>

              {/* <input type="range" id="password-length" min="6" max="50" value="26"></input> */}
            </div>
            <div className="custom-options-wrapper">
                <div className="custom-options-checkbox-wrapper">
                    <div className="custom-options-checkbox">
                        <input /*className="custom-checkbox-input"*/ id="custom-checkbox-uppercase" type="checkbox" name="uppercase"></input>
                        <label className="custom-checkbox-label" for="custom-checkbox-uppercase">Uppercase</label>
                    </div>
                    <div className="custom-options-checkbox">
                        <input /*className="custom-checkbox-input"*/ id="custom-checkbox-lowercase" type="checkbox" name="lowercase"></input>
                        <label className="custom-checkbox-label" for="custom-checkbox-lowercase">Lowercase</label>
                    </div>
                    <div className="custom-options-checkbox">
                        <input /*className="custom-checkbox-input"*/ id="custom-checkbox-numbers" type="checkbox" name="numbers"></input>
                        <label className="custom-checkbox-label" for="custom-checkbox-numbers">Numbers</label>
                    </div>
                    <div className="custom-options-checkbox">
                        <input /*className="custom-checkbox-input"*/ id="custom-checkbox-specialchar" type="checkbox" name="specialchar"></input>
                        <label className="custom-checkbox-label" for="custom-checkbox-specialchar">Special characters</label>
                    </div>
                </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Main;
