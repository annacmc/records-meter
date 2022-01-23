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
 import {RecordCount} from "../RecordCount";


test("record count output text is correct", () => {

    const { rerender } = render(
      <RecordCount recordCount={20} planRecordLimit={100}></RecordCount>
    );
  
    expect(
      screen.getByText("20 records indexed out of the 100 alloted for your current plan")
    ).toBeVisible();

  });


  test("record count does not output a message if there are no records to count", () => {

    const { rerender } = render(
      <RecordCount></RecordCount>
    );

    const recordCountMessage = screen.queryByText("records indexed out of the")
    expect(recordCountMessage).not.toBeInTheDocument()

  }
  );
  