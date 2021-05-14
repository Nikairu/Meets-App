import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { mockData } from "./mock-data";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations } from "./api";

class App extends Component {
  state = {
    locations: extractLocations(mockData),
    numberOfEvents: 32,
  };

  onNumberOfEventsChange = (value) => {
    this.setState({
      numberOfEvents: value,
    });
  };

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} />
        <NumberOfEvents onNumberOfEventsChange={this.onNumberOfEventsChange} />
        <EventList
          numberOfEvents={this.state.numberOfEvents}
          events={mockData}
        />
      </div>
    );
  }
}

export default App;
