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
import { RecordCount } from "../RecordCount";

describe("record count", () => {
  test("outputs correct text", () => {
    const { rerender } = render(
      <RecordCount recordCount={20} planRecordLimit={100}></RecordCount>
    );

    expect(
      screen.getByText(
        "20 records indexed out of the 100 alloted for your current plan"
      )
    ).toBeVisible();
  });

  test("doesn't output if there are no records", () => {
    const { rerender } = render(<RecordCount></RecordCount>);

    const recordCount = screen.queryByTestId("recordCount");
    expect(recordCount).not.toBeInTheDocument();
  });
});
