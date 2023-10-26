import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked")
        // setText("You have clicked on handleUpClick");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Uppercase conversion completed!", "success");   
    }
    const handleLowClick = () => {
        // console.log("Lowercase was clicked")
        // setText("You have clicked on handleLowClick");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Lowercase conversion completed!", "success");  
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert(" Text cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleConcatClick = () => {
        let newText = text + "newText";
        setText(newText);
        props.showAlert(" Concatenation completed!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra spaces removed!", "success");
    }

    const [text, setText] = useState("Enter the text");
    // text = "new text" Incorrect way to change the state
    // setText("new text") Correct way to change the state
  
    return (
        <>   
    <div className='container' style={{color: props.mode=== "dark"? "white":"#021a46"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== "dark"? "grey":"white", color: props.mode=== "dark"? "white":"black"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-warning mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-warning mx-2" onClick={handleClearClick}>Clear the Text</button>
        <button className="btn btn-warning mx-2" onClick={handleConcatClick}>Concat the Text</button>
        <button className="btn btn-warning mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    <div className='container my-3' style={{color: props.mode=== "dark"? "white":"#021a46"}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something in the textbox above to preview it"}</p>


    </div>
        </>
  )
    }
