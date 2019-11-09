import React from 'react';
import axios from 'axios';
import DisplayPlayers from '../src/components/DisplayPlayers';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        <DisplayPlayers players={this.state.players} />
      </div>
    );
  }
}

export default App;
