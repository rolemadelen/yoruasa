import React from 'react';
import './App.css';
import Yoruasa from './components/Yoruasa';

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div className="App">
          <Yoruasa />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
