import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: "",
  };

  handleInputChanged = (eventCount) => {
    const value = eventCount.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        errorText: "Please select a number between 0 and 32",
        numberOfEvents: value,
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
      this.props.onNumberOfEventsChange(value);
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events:</label>
        <input
          type="number"
          id="numberOfEvents_input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;
