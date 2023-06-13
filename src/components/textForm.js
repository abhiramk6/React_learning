import React,{useState} from 'react'

export default function TextForm(props) {

    const handelOnChange =(event)=>{

        setText(event.target.value)

    }

    const handelDoClick =()=>{

      let newText =text.toLowerCase();
      setText(newText);

  }

    const handelUpClick =()=>{

        let newText =text.toUpperCase();
        setText(newText);

    }


    const [text,setText]= useState('Enter Text Here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-4 mx-4" onClick={handelUpClick}>convert to upercase</button>
        <button className="btn btn-primary" onClick={handelDoClick}>convert to lowercase</button>
        </div>

        <div className="container">
          <h3>Your text summary</h3>
          <p>{text.split(" ").length} charecters and {text.length} words</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
    </div>
  )
}


