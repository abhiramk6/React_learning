
import './App.css';
import About from './components/About';
import Navbar from './components/navbar';
import TextForm from './components/textForm';

function App() {
  return (
<>    
    <Navbar title = "Textutils" />
  
    <div className="container my-3">
    <TextForm heading = " enter text here"/> 

    {/* <About /> */}
    </div>
</>
  );
};

export default App;
  