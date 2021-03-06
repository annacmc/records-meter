/**
 * @jest-environment jsdom
 */
/* global expect */

/**
 * External dependencies
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

/**
 * Internal dependencies
 */
import App from "./App.js";

jest.mock("./components/BarChart", () => ({
  BarChart: () => null,
}));

describe("load the app", () => {
  test("container renders", () => {
    const { rerender } = render(<App />);

    const recordMeterContainer = screen.queryByTestId("recordMeter");
    expect(recordMeterContainer).toBeInTheDocument();
  });
});
