import React, { useEffect, useRef, useState } from "react";
import "../style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [password, setPassword] = useState("");
  const [isCopy, setIsCopy] = useState(false);
  const [length, setLength] = useState(8)
  const [upperCase, setUpperCase] = useState(true)
  const [lowerCase, setLowerCase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const inputRef = useRef(null)
  const handleCopy = () => {
    window.navigator.clipboard.writeText(password)
    toast("Password Copied")
    inputRef.current.select()
  };

  const generatePassword = () => {
    let pass = ''
    let upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
    let numberList = '0123456789'
    let symbolList = '!@#$%^&*()_+'
    let str = ''
    if(upperCase) {
      str+=upperCaseChar
    }
    if(lowerCase) str += lowerCaseChar
    if(number) str += numberList
    if(symbol) str += symbolList

    for(let i=0;i<length; i++) {
      const char = Math.floor(Math.random() * str.length );
      pass += str.charAt(char)
    }

    setPassword(pass)

  }

  useEffect(()=>{
    generatePassword()
  },[length, upperCase, lowerCase, number, symbol])

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
                  value={length}
                  readonly
                ></input>
                {/* <div className="custom-range-range">
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
                </div> */}
                <input type="range" 
                min={'8'}
                max={'50'}
                value={length}
                onChange={(e)=>{
                  console.log("eee",e.target.value)
                  setLength(Number(e.target.value))
                  }}/>
              </div>

              {/* <input type="range" id="password-length" min="6" max="50" value="26"></input> */}
            </div>
            <div className="custom-options-wrapper">
                <div className="custom-options-checkbox-wrapper">
                    <div className="custom-options-checkbox">
                        <input /*className="custom-checkbox-input"*/ id="custom-checkbox-uppercase" checked={upperCase} type="checkbox" name="uppercase" onChange={(e)=> setUpperCase(e.target.checked)}></input>
                        <label className="custom-checkbox-label" for="custom-checkbox-uppercase">Uppercase</label>
                    </div>
                    <div className="custom-options-checkbox">
                        <input /*className="custom-checkbox-input"*/ id="custom-checkbox-lowercase" checked={lowerCase} type="checkbox" name="lowercase" onChange={(e)=> setLowerCase(e.target.checked)}></input>
                        <label className="custom-checkbox-label" for="custom-checkbox-lowercase">Lowercase</label>
                    </div>
                    <div className="custom-options-checkbox">
                        <input /*className="custom-checkbox-input"*/ id="custom-checkbox-numbers"checked={number} type="checkbox" name="numbers" onChange={(e)=> setNumber(e.target.checked)}></input>
                        <label className="custom-checkbox-label" for="custom-checkbox-numbers">Numbers</label>
                    </div>
                    <div className="custom-options-checkbox">
                        <input /*className="custom-checkbox-input"*/ id="custom-checkbox-specialchar" checked={symbol} type="checkbox" name="specialchar" onChange={(e)=> setSymbol(e.target.checked)}></input>
                        <label className="custom-checkbox-label" for="custom-checkbox-specialchar">Special characters</label>
                    </div>
                </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "green", color:"white" }}/>
    </>
  );
};

export default Main;
