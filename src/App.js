import React, {Component} from 'react';
import AnalogClock from './AnalogClock';
import './App.css';

class App extends Component {
  // initialize the states including clock hands at California and London time zone, and a state about whether days light saving applied or not 
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    londonSeconds: 0,  
    londonMinutes: 0,  
    londonHours: 0,
    dstApplied: "false"
  }

  componentDidMount() {
    setInterval(() => {
      this.setClock()
    }, 1000)
  }

  // render the clock components
  setClock = () => {
    // get the local time with UTC-8, and london local time with UTC-0 without applying days light saving
    const currentTime  = new Date();

    // clock hands at local (California)
    let handSecond = currentTime.getSeconds();
    let handMinute = currentTime.getMinutes() + handSecond / 60;
    let handHour = (currentTime.getUTCHours() - 8) + handMinute / 60;

    // clock hands at London 
    let londonSeconds = handSecond;
    let londonMinutes = handMinute;
    let londonHours = (currentTime.getUTCHours() - 0) + handMinute / 60;

    // update all the clock hands state
    this.setState({seconds: handSecond});
    this.setState({minutes: handMinute});
    this.setState({hours: handHour});
    this.setState({londonSeconds: londonSeconds});
    this.setState({londonMinutes: londonMinutes});
    this.setState({londonHours: londonHours});

    // re-render all the clock hands if days light saving was applied 
    if (this.state.dstApplied === "true") {
      // Possibility One, if we need to use current time to show the days light saving, there should be nothing different now. So I'm going to take possibility two in this case

      // Possibility One ============================================================================================================
      // update hours hand for local and london time, this time should have been automatially applied with days light saving
      // hour hands needed to be changed only

      // // change hour hand at local time zone, california
      // let dstLocalHours = currentTime.getHours() + handMinute / 60;

      // // change hour hand at London time zone
      // let londonCurrentTime = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });
      // // hanle string result of londonCurrentTime
      // let londonCurTime = londonCurrentTime.split(',')[1];
      // let londonDstHours = parseInt(londonCurTime.split(':')[0]) % 12 + londonMinutes / 60;

      // Possibility One ============================================================================================================

      // Possibility Two, which assume it's under days light saving now, use UTC-7 for California, and UTC+1 for London time zone
      let dstLocalHours = (currentTime.getUTCHours() - 7) + handMinute / 60;
      let londonDstHours = (currentTime.getUTCHours() + 1) + handMinute / 60;
      // render the components with applying days light saving
      this.setState({hours: dstLocalHours});
      this.setState({londonHours: londonDstHours});
    }
  }

  // onchange handle used to turn on and off days light saving function
  onChange = e => {
    if (e.target.value === "true") {
      this.setState({dstApplied: "true"});
    } else {
      this.setState({dstApplied: "false"});
    }
  }

  render() {
    // defactor all of the states
    const {seconds, minutes, hours, londonSeconds, londonMinutes, londonHours, dstApplied} = this.state;

    return (
      <div className="app">
        <div className='clocks'>
          <AnalogClock curSec={seconds} curMin={minutes} curHr={hours} location={"San Francisco"}/>
          <AnalogClock curSec={londonSeconds} curMin={londonMinutes} curHr={londonHours} location={"London"}/>
        </div>
        <div className="apply-dst">
            <span>Apply Daylight Savings: </span>
            <label>
                <span>On </span>
                <input type="radio" name="DST" value="true" checked={dstApplied === "true"} onChange={this.onChange}/>
            </label>
            <label>
                <span>Off </span>
                <input type="radio" name="DST" value="false" checked={dstApplied === "false"} onChange={this.onChange}/>
            </label>
        </div>
      </div>
    )
  }
}

export default App;
