import logo from './logo.svg';
import './App.css';
import AllPost from './AllPost';

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
      </header>
      <AllPost posts={[
        'posts/1',
        'posts/2',
        'posts/3',
        'posts/4',
      ]} />
    </div>
  );
}

export default App;
