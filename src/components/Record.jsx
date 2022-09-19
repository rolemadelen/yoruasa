import React from 'react';
import './Record.css';

class Record extends React.Component {
  render() {
    if (this.props.type === 'new') {
      return (
        <React.StrictMode>
          <div className="newRecord">
            <button>
              {/* Button */}
              <span></span>
              <span></span>
            </button>
          </div>
        </React.StrictMode>
      );
    } else {
      return (
        <React.StrictMode>
          <div>Not here</div>
        </React.StrictMode>
      );
    }
  }
}

export default Record;
