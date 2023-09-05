import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import {useState} from 'react';


function App() {
  const [mode,setMode] = useState('light');
  const [modeText, setmodeText] = useState("Enable Dark Mode");

  const changeMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setmodeText("Enable Light Mode");
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      setmodeText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
      <>
        <Navbar title="TextUtilities" theme={mode} toggleMode={changeMode} modeText={modeText}/>

        <TextArea heading="Enter text below" theme={mode}/>
      </>
  )
}

export default App
