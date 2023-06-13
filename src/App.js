
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/navbar';
import TextForm from './components/textForm';


function App() {

  const [mode,setMode] = useState('light');

  const toggleMode =()=>{
    setMode(mode==='light'?'dark':'light');
  }

  return (
<>    

    <Navbar title = "Textutils" mode = {mode} toggleMode={toggleMode}/>
  
    <div className="container my-3">
    <TextForm heading = " enter text here"/> 

    {/* <About /> */}
    </div>
</>
  );
};

export default App;
  