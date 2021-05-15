import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import { extractLocations, getEvents } from "./api";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

class App extends Component {
  state = {
    locations: [],
    numberOfEvents: 32,
    events: [],
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onNumberOfEventsChange = (value) => {
    this.setState({
      numberOfEvents: value,
    });
  };

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  render() {
    const { events, numberOfEvents, locations } = this.state;

    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents onNumberOfEventsChange={this.onNumberOfEventsChange} />
        <EventList events={events.slice(0, numberOfEvents)} />
      </div>
    );
  }
}

export default App;
