import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (eventCount) => {
    const value = eventCount.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.onNumberOfEventsChange(value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events:</label>
        <input
          type="number"
          id="numberOfEvents input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}
export default NumberOfEvents;