import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cont: 0,
      visual: true
    };
  }

  Incremento = () => {
    this.setState({ cont: this.state.cont + 1 });
  }
  Decremento = () => {
    this.setState({ cont: this.state.cont - 1 });
  }
  Nascondi = () => {
    this.setState({ visual: !this.state.visual });
  }

  render() {
    return (
      <div>
        <button className="uno dim" onClick={this.Incremento}>+</button>
        
 
        { this.state.visual ? <div className="quattro dim"> { this.state.cont }</div> : '' }
		<button className="tre" onClick={this.Nascondi}>
          { this.state.visual ? 'NASCONDI' : 'VISUALIZZA' }
        </button>
		
		<button className="due dim" onClick={this.Decremento}>-</button>
      </div>
    );
  }
}

export default App;