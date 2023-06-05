import './App.css';
import {useState} from "react"

function App() {
  return (
    <div className="App">
      <button className='button' aria-label='Increment value' onClick={() => {}}> + </button>

      <span className="value">0</span>
       
      <button className='button' aria-label='Decrenebt value' onClick={() => {}}> - </button>
    </div>
  );
}

export default App;
