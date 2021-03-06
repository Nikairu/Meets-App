import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event events={mockData[0]} />);
  });

  test("render correct number of events", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("clicking details should change the show state", () => {
    EventWrapper.setState({
      details: false,
    });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".event__Details").text()).toBe(
      mockData[0].description
    );
  });
});
