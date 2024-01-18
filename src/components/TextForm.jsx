import { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleReverseClick = () => {
    let newText = text.split(" ").reverse().join(" ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Conert To UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Conert To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>
          Conert To LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default TextForm;
