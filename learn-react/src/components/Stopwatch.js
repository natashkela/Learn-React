import React, {Component} from 'react';

class Stopwatch extends Component{
  state={
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  handleStopWatch=()=>{
    this.setState(prevState=>{
      return{
        isRunning: (!prevState.isRunning)
      }
    });
    if(!this.state.isRunning){
      this.setState(prevState=>{
        return {
          previousTime: Date.now()
        }
      });
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(()=>this.tick(),100);
  }

  tick = () => {
    if(this.state.isRunning){
      const now = Date.now();
      this.setState(prevState=>{
        return {
          previousTime: now,
          elapsedTime: prevState.elapsedTime+(now-prevState.previousTime)
        }
      });
    }
  }

  render(){
    return(
      <div className="stopwatch">
        <h2>
          Stopwatch
        </h2>
        <span className="stopwatch-time">{this.state.elapsedTime}</span>
        <button onClick={this.handleStopWatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}> Reset </button>
      </div>
    )
  }
}

export default Stopwatch;
