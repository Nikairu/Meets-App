import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import { extractLocations } from "../api";

const locations = extractLocations(mockData);

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given("the page has loaded", () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
    });

    when("the user hasn’t specified a number", () => {});

    then("the amount of events shown by default is 32", () => {
      expect(AppWrapper.find(".event").length).toBeLessThanOrEqual(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the page has loaded", () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
    });

    when("the user changes the amount of events to be shown", () => {
      AppWrapper.find("#numberOfEvents_input").simulate("change", {
        target: { value: "1" },
      });
    });

    then(
      "the amount of events shown will be the one the user specified",
      () => {
        expect(AppWrapper.find(".event").length).toBe(1);
      }
    );
  });
});
