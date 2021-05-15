import React, { Component } from "react";

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
    this.setState({
      query: value,
      suggestions,
      displayAll: true,
    });
  };

  handleItemClicked = (suggestion) => {
    suggestion !== "all" &&
      this.setState({
        query: suggestion,
        displayAll: false,
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
        <input
          type="text"
          className="city"
          value={query}
          onChange={this.handleInputChanged}
          onFocus={() => this.handlefocus(true)}
          onBlur={() => this.handlefocus(false)}
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
