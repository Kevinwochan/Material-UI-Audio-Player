import React, {useState, useRef} from 'react';
import logo from "./logo.svg";
import "./App.css";
import Player from "./Player";

function App() {
  const [audioPlayerControls, setAudioPlayerControls] = useState({
    addAudio: () => {},
    playNow: () => {},
  }); 
  const audioPlayer = useRef(
    <Player setAudioPlayerControls={setAudioPlayerControls} />
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {audioPlayer.current}
    </div>
  );
}

export default App;
