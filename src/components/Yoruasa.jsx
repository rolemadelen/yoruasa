import React from 'react';
import Record from './Record';
import './Yoruasa.css';

class Yoruasa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <React.StrictMode>
        <div className="wrapper">
          <main>
            <Record type={'new'} />
            <Record type={'new'} />
            <Record type={'new'} />
          </main>
        </div>
      </React.StrictMode>
    );
  }
}

export default Yoruasa;
