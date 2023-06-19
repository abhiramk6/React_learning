
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert';


function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState('null');

  const showAlert = (message,type) =>{
    setAlert({
      message: message,
      type: type
    })
  }

  const toggleMode =()=>{
    setMode(mode==='light'?'dark':'light');
    document.body.style.backgroundColor = mode==='light'?'#004273':'white';
  }

  return (
<>    

    <Navbar title = "Textutils" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert='this is alert' />
  
    <div className="container my-3">
    <TextForm heading = " enter text here" mode = {mode}/> 

    {/* <About /> */}
    </div>
</>
  );
};

export default App;
  