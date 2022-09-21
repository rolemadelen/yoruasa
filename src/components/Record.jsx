import React from 'react';
import './Record.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

class Record extends React.Component {
  render() {
    if (this.props.type === 'new') {
      return (
        <React.StrictMode>
          <div className="newRecord">
            <button>
              <span></span>
              <span></span>
            </button>
          </div>
        </React.StrictMode>
      );
    } else {
      return (
        <React.StrictMode>
          <div className="logRecord">
            <div>
              <div className="yoru">
                <DarkModeIcon />
                <span className="yoru-time">22:30</span>
              </div>
              <div className="asa">
                <span className="asa-time">05:00</span>
                <LightModeIcon />
              </div>
            </div>
          </div>
        </React.StrictMode>
      );
    }
  }
}

export default Record;
