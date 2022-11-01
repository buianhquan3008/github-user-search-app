import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-box">
        <div className="header">
          <div className="header-title">devfinder</div>
          <div className="header-mode">
            <div className="mode-text">Light</div>
            <div className="mode-icon"></div>
          </div>
        </div>
        <div className="search">
          <div className="search-icon"></div>
          <input type="text" className="search-input" placeholder='Search GitHub username…'/>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
