import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import EventList from "./EventList";
import { extractLocations, getEvents } from "./api";
import { ErrorAlert } from "./Alert";

//scatter chart imports
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//Event genres import
import EventGenre from "./EventGenre";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    if (!navigator.onLine) {
      this.setState({
        isOffline:
          "The app is currently offline so this data may not be up to date.",
      });
    } else {
      this.setState({
        isOffline: "",
      });
    }
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

  getData = () => {
    const { events } = this.state;
    const specificLocation = extractLocations(events);
    const data = specificLocation.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  render() {
    const { events, numberOfEvents, locations } = this.state;

    return (
      <div className="App">
        <ErrorAlert text={this.state.isOffline} />
        <h4>Type a city:</h4>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents onNumberOfEventsChange={this.onNumberOfEventsChange} />
        <div className="data-vis-wrapper">
          <EventGenre events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="number of events"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <EventList events={events.slice(0, numberOfEvents)} />
      </div>
    );
  }
}

export default App;
