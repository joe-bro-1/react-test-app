import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.4.0/annyang.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/speechkitt.min.js"></script>
      <script src="./voice.js"></script>
    </div>
  );
}

export default App;
