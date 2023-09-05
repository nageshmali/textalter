import React, { useState } from "react";

export default function TextArea(props) {

  const [text, setText] = useState("");
  const [vcount, setvcount] = useState(0);
  const [ccount, setccount] = useState(0);

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    setccount(0);
    setvcount(0);
  }

  let vc = 0;
  const countVowels = () => {
    for(let i=0;i<=text.length;i++){
      if(text.charAt(i).match(/[aeiouAEIOU]/)){
        vc++;
        setvcount(vc);
      }
    }
  }

  let cc = 0;
  const countConsonents = () => {
    for(let i=0;i<=text.length;i++){
      if(text.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)){
        cc++;
        setccount(cc);
      }
    }
  }

  const handleCopy = () => {
    let myText = document.getElementById('myBox');
    myText.select();
    navigator.clipboard.writeText(myText.value);
  }

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  return (
    <>
      <div className="container mt-4">
        <div className="form-group">
            <h3 style={{color:props.theme === 'light'?'black':'white'}}>{props.heading}</h3>
            <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.theme === 'light'?'white':'grey',color:props.theme === 'light'?'black':'white'}}
            ></textarea>
        </div>
        <button className="btn btn-primary my-1" onClick={handleUppercase}>Convert to Uppercase</button>
        <button className="btn btn-success ml-3 my-1" onClick={handleLowercase}>Convert to Lowercase</button>
        <button className="btn btn-warning ml-3 my-1" onClick={countVowels}>Count Vowels</button>
        <button className="btn btn-secondary ml-3 my-1" onClick={countConsonents}>Count Consonents</button>
        <button className="btn btn-info ml-3 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-dark ml-3 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-danger ml-3 my-1" onClick={handleClearText}>Clear Text</button>
      </div>
      <div className="container mt-4" style={{color:props.theme === 'light'?'black':'white'}}>
        <h3>Text Summary</h3>
        <p>{text.split(" ").filter((x) => x != "").length} words and {text.length} characters</p>
        <p>This text takes {0.4 * text.split(" ").filter((x) => x != "").length} sec to read approximately</p>
        <p>{vcount} vowels</p>
        <p>{ccount} consonents</p>
      </div>
    </>
  );
}
