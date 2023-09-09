import React, { useState } from 'react'

export default function About() {
    
    const [myStyle, setMyStyle]= useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext, setBtntext]= useState("Enable Dark Mode")
    const toggelStyle =()=>{
        if(myStyle.color==='black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtntext("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtntext("Enable Dark Mode")
        }
    }
    
  return (
    <div className="container" style={myStyle}>
        <h2 className="my-2">About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Why i created it?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                    While i started <strong>React JS</strong> i created TextUtils as a learning project. My first project while learning react was this.  A simple text analyser,  
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What does it do?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    TextUtils is a ReactJS website built<strong> primarily to do various operations on regularly typed text.</strong> With just one click of a button, TextUtils can change the case of any text you enter. You may also eliminate whitespace from your written documents and listen to it rather than straining your eyes. It does a thorough analysis of your content and outputs the number of words and characters as well as the reading duration. You can even copy your text after you have made changes. 

 
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatibility
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    It works with all of your preferred browsers.

                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <button className="btn btn-primary my-3" onClick={toggelStyle}>{btntext}</button>
        </div>
    </div>
  )
}
