import React, { Component } from "react";

class Event extends Component {
  state = {
    details: false,
  };

  showDetails = () => {
    this.setState({
      details: !this.state.details,
    });
  };

  formatDate = (date) => {
    let month = ("0" + (date.getMonth() + 1)).slice(-2),
      day = "" + ("0" + date.getDate()).slice(-2),
      year = date.getFullYear(),
      hour = ("0" + (date.getHours() - 2)).slice(-2),
      minute = ("0" + date.getMinutes()).slice(-2);

    return `${[day, month, year].join("/")} ${[hour, minute].join(":")} GMT`;
  };

  render() {
    let startDate = new Date(this.props.events.start.dateTime);
    let endDate = new Date(this.props.events.end.dateTime);

    return (
      <div className="event">
        <p className="dates">{`${this.formatDate(
          startDate
        )} - ${this.formatDate(endDate)}`}</p>
        <p className="summary">{`${this.props.events.summary}`}</p>
        <button className="details-button" onClick={this.showDetails}>
          Details
        </button>
        {this.state.details && (
          <div className="details">
            <p className="summary">{`${this.props.events.description}`}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Event;
