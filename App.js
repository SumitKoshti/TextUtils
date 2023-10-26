// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
 }

  
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#021a46";
      showAlert( "Dark mode has been enabled!","success")
      document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils Is Amazing"
      // }, 2500);
      // setInterval(() => {
      //   document.title = "Install Now"
      // }, 1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"; 
      showAlert( "Light mode has been enabled!","success") 
      document.title = "TextUtils - Light Mode"
  }
}

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutTxt="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} title="Enter the text to analyze below" mode={mode} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
