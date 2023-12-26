import { useState } from 'react';
import './App.css';

function App() {
  const [toggleBtnText, setToggleBtnText] = useState(false);

  const toggleBtnHandler = () => {
    console.log("Clicked")
    setToggleBtnText(!toggleBtnText)
  }
  return (
    <div className="App">
      <header className="App-header">
        <button type='button' onClick={toggleBtnHandler} >
          {
            toggleBtnText ? "ON" : "OFF"
          }
        </button>
      </header>
    </div>
  );
}

export default App;
