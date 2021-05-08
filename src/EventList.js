import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {console.log(this.props.numberOfEvents)}
        {events.slice(0, this.props.numberOfEvents).map((event) => (
          <li key={event.id}>
            <Event events={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
