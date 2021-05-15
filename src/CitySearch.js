import React, { Component } from "react";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    displayAll: false,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText:
          "We can not find the city you are looking for. Please try another city",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
    this.setState({
      query: value,
      suggestions,
      displayAll: true,
    });
  };

  handleItemClicked = (suggestion) => {
    suggestion !== "all"
      ? this.setState({
          displayAll: false,
          query: suggestion,
        })
      : this.setState({
          displayAll: false,
          query: "",
          infoText: "",
        });
    this.props.updateEvents(suggestion);
  };

  handlefocus = (focusState) => {
    this.setState({
      displayAll: focusState,
    });
  };

  render() {
    const { displayAll, query, suggestions } = this.state;

    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <input
          type="text"
          className="city"
          value={query}
          onChange={this.handleInputChanged}
          onFocus={() => this.handlefocus(true)}
          onBlur={() => this.handlefocus(false)}
          onClick={() => this.handlefocus(true)}
        />

        <ul
          className="suggestions"
          style={displayAll ? {} : { display: "none" }}
        >
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}

          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => this.handleItemClicked("all")}
          >
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
