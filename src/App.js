import logo from './logo.svg';
import './App.css';
import cssTest from './test.module.css';
import sassTest from './test.module.scss';

function App() {
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
        <p className={cssTest.text}>これはテストですと。</p>
        <p className={sassTest.text}>これはSassのテストですと。</p>

      </header>
    </div>
  );
}

export default App;
