import React,{useState} from 'react'

export default function TextForm(props) {

    const handelOnChange =(event)=>{

        setText(event.target.value)

    }

    const handelOnClick =()=>{

        let newText =text.toUpperCase();
        setText(newText);

    }


    const [text,setText]= useState('Enter Text Here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary" onClick={handelOnClick}>convert to upercase</button>
        </div>
    </div>
  )
}


