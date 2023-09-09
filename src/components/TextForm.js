import React, {useState} from 'react'

export default function TextForm(props) {
    const handelUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }
    const handelLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success")
    }
    const handelClearClick = ()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text Cleared!","success")
    }  
    const handelSpeakClick = ()=>{
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toggel=document.getElementById("toggel")
        if(toggel.textContent==="Speak"){
            toggel.innerHTML="Stop";
        }
        else{
            toggel.innerHTML="Speak";
            if(toggel.innerHTML==="Speak"){
                window.speechSynthesis.cancel();
            }
        }  
    }  
     
    const handelCopyClick = ()=>{
        let text= document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success")
    } 
    const handelESClick = ()=>{
        let ntext= text.split(/[ ]+/);
        setText(ntext.join(" "))
        props.showAlert("Extra Space removed!","success")
        
    } 

    const handelonChange =(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
    <textarea className="form-control"  id={"myBox"} value={text} style={{backgroundColor: props.mode==='dark'? 'grey':'white' , color: props.mode==='dark'? 'white':'#042743'}} onChange={handelonChange} rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handelClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handelSpeakClick} id="toggel">Speak</button>
        <button className="btn btn-primary mx-2" onClick={handelCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handelESClick}>Remove Extra Spaces</button>
        
    </div>
    <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>{text.length>0? text.trim().split(" ").length:0} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} mintues read  </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    
    </>
  )
}
