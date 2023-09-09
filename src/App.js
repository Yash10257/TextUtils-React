import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   BrowserRouter
// } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils- Dark Mode"
    }
     else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils- Light Mode"
    }
  }
  return (
    <>
     {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alerts alert={alert}/>
    <div className="container my-3">
      {/* <Routes>
          <Route path="/about" element={<About/>}/>
      </Routes> */}
      {/* <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>}/>   
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
