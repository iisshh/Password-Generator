import React, { useEffect, useRef, useState } from "react";
import "../style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);

  const minimumValue = 4;
  const maximumValue = 50;
  const percentage =
    ((length - minimumValue) / (maximumValue - minimumValue)) * 100;

  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const inputRef = useRef(null);
  const handleCopy = () => {
    window.navigator.clipboard.writeText(password);
    toast("Password Copied");
    inputRef.current.select();
  };

  const generatePassword = () => {
    let pass = "";
    let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    let numberList = "0123456789";
    let symbolList = "!@#$%^&*()_+";
    let str = "";
    if (upperCase) {
      str += upperCaseChar;
    }
    if (lowerCase) str += lowerCaseChar;
    if (number) str += numberList;
    if (symbol) str += symbolList;

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, upperCase, lowerCase, number, symbol]);

  const updateBar = (e) => {
    const value = Number(e.target.value);
    setLength(value);
    const percentage =
      ((value - e.target.min) / (e.target.max - e.target.min)) * 100;
    console.log(e);
    e.target.style.setProperty("--percentage", `${percentage}%`);
  };

  return (
    <>
      <div className="title-bar">
        <h1>
          Quickly create a secure, random password using the online password
          generator
        </h1>
        <p>
          Instantly generate a secure, random password with our online password
          generator tool.
        </p>
      </div>

      <div className="container">
        <div className="pg-container-left">
          <div class="image-container">
            <img src="/passwordwallpaper.jpg" />
          </div>
        </div>
        <div className="pg-container-right">
          <div className="pg-container-1">
            <input
              type="text"
              placeholder="new password"
              value={password}
              readOnly
              ref={inputRef}
            ></input>
            <div className="buttonsWrapper">
              <div className="copy-container" onClick={handleCopy}>
                <button className="copy-button copy-image"></button>
                <span className="message">Copy</span>
              </div>
              <div className="refresh-container" onClick={generatePassword}>
                <button className="refresh-button refresh-image"></button>
                <span className="message">Generate a new password</span>
              </div>
            </div>
          </div>
          <div className="pg-container-2">
            <h3 className="custom-title">Customize your password</h3>
            <div className="custom-range-wrapper">
              <label className="custom-range-label" for="password-length">
                Password Length
              </label>
              <input
                type="number"
                name="length"
                step="1"
                min="0"
                max="100"
                className="custom-range-number"
                id="password-length"
                value={length}
                readonly
              ></input>
            </div>
            <div className="custom-range">
              <span className="range-min">{minimumValue}</span>
              <input
                className="slider"
                type="range"
                min={minimumValue}
                max={maximumValue}
                value={length}
                onChange={updateBar}
                style={{ "--percentage": `${percentage}%` }}
              />
              <span className="range-max">{maximumValue}</span>{" "}
              {/* Max value */}
            </div>

            <div className="custom-options-container">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="custom-checkbox-uppercase"
                  checked={upperCase}
                  name="uppercase"
                  onChange={(e) => setUpperCase(e.target.checked)}
                />
                <label for="custom-checkbox-uppercase" className="toggle">
                  <span></span>
                </label>
                <label
                  className="custom-checkbox-label"
                  for="custom-checkbox-uppercase"
                >
                  Uppercase
                </label>
              </div>

              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="custom-checkbox-lowercase"
                  checked={lowerCase}
                  name="lowercase"
                  onChange={(e) => setLowerCase(e.target.checked)}
                />
                <label for="custom-checkbox-lowercase" className="toggle">
                  <span></span>
                </label>
                <label
                  className="custom-checkbox-label"
                  for="custom-checkbox-lowercase"
                >
                  Lowercase
                </label>
              </div>

              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="custom-checkbox-numbers"
                  checked={number}
                  name="numbers"
                  onChange={(e) => setNumber(e.target.checked)}
                />
                <label for="custom-checkbox-numbers" className="toggle">
                  <span></span>
                </label>
                <label
                  className="custom-checkbox-label"
                  for="custom-checkbox-numbers"
                >
                  Numbers
                </label>
              </div>

              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="custom-checkbox-specialchar"
                  checked={symbol}
                  name="specialchar"
                  onChange={(e) => setSymbol(e.target.checked)}
                />
                <label for="custom-checkbox-specialchar" className="toggle">
                  <span></span>
                </label>
                <label
                  className="custom-checkbox-label"
                  for="custom-checkbox-specialchar"
                >
                  Special characters
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        toastStyle={{ backgroundColor: "green", color: "white" }}
      />
    </>
  );
};

export default Main;
