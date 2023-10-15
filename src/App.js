import React from 'react';
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/assets/lologs.png`} alt="Company Logo" />


          <h1>MINDSIGHT</h1>
        </div>
        <p>Click the button below to download the APK file.</p>
        <a
          className="App-link"
          href="/MindSight.apk"
          download="MindSight.apk"
        >
          Download APK
        </a>
      </header>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} MindSight</p>
      </footer>
    </div>
  );
}

export default App;
