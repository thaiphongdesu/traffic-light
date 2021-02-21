import './App.css';
import React, { Component } from 'react';
import TrafficLight from './components/TrafficLight';

class App extends Component{
  constructor(){
    super();
    this.state = {
      color:'red'
    };
    setInterval(()=>{
      this.setState({
        color: this.getNextState(this.state.color)
      });
    },1000);
  }
  getNextState(state){
    switch(state){
      case 'red': return 'orange';
      case 'orange': return 'green';
      default: return 'red';
    }
  }
  render(){
    return (
      <div className='App'>
        <TrafficLight shape='red' color={this.state.color}/>
        <TrafficLight shape='orange' color={this.state.color}/>
        <TrafficLight shape='green' color={this.state.color}/>
      </div>
    );
  }
}

export default App;
