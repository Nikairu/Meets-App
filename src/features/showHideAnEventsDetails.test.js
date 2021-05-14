import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import { extractLocations } from "../api";

const locations = extractLocations(mockData);

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("User should see the event element is collapsed by default", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the list of events has been loaded", () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    });

    when("the user hasn’t clicked to show the event’s details", () => {});

    then("all the event’s details will be collapsed", () => {
      const eventDetails = AppWrapper.find(".event .event__Details");
      expect(eventDetails).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the list of events has been loaded", () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    });

    when("the user clicks “show details” on an event", () => {
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    then("the event’s details will be shown", () => {
      expect(AppWrapper.find(".event .event__Details")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given(
      "the list of events has been loaded and the user has clicked “show details” on an event",
      () => {
        AppWrapper = mount(<App />);
        AppWrapper.update();
        AppWrapper.find(".event .details-btn").at(0).simulate("click");
        expect(AppWrapper.find(".event .event__Details")).toHaveLength(1);
      }
    );

    when("the user clicks “hide details” on an event", () => {
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    then("the event’s details will be hidden", () => {
      const eventDetails = AppWrapper.find(".event .event__Details");
      expect(eventDetails).toHaveLength(0);
    });
  });
});
