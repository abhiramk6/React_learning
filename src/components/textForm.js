import React,{useState} from 'react'

export default function TextForm(props) {

    const handelOnChange =(event)=>{

        setText(event.target.value)

    }

    const handelDoClick =()=>{

      let newText =text.toLowerCase();
      setText(newText);

      props.showAlert("Converted to lowercase","success")

  }

    const handelUpClick =()=>{

        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")

    }


    const [text,setText]= useState('');
  return ( 
    <div className="container" style = {{color: props.mode==='light'?'#004273':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey' , color:props.mode==='light'?'#004273':'white'}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-2 my-4" onClick={handelUpClick}>convert to upercase</button>
        <button className="btn btn-primary mx-2 my-4" onClick={handelDoClick}>convert to lowercase</button>
        </div>

        <div className="container">
          <h3>Your text summary</h3>
          <p>{text.split(" ").length - 1} words and {text.length} charecters</p>
          <h3>Preview</h3>
          <p>{text===''?'Enter your text':text}</p>
        </div>
    </div>
  )
}


