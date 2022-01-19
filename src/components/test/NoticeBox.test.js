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
import {NoticeBox} from "../NoticeBox";

// Test Notice Box Component

test("notice box outputs the correct messages", () => {
  // test without being indexed
  const { rerender } = render(
    <NoticeBox
      recordCount={20}
      planRecordLimit={100}
      hasBeenIndexed={false}
      hasValidData={true}
      hasItems={true}
    ></NoticeBox>
  );

  expect(
    screen.getByText("Your content has not yet been indexed for Search")
  ).toBeVisible();

  // test without valid data
  rerender(
    <NoticeBox
      recordCount={20}
      planRecordLimit={100}
      hasBeenIndexed={true}
      hasValidData={false}
      hasItems={true}
    ></NoticeBox>
  );

  expect(
    screen.getByText(
      "We weren’t able to properly locate your content for Search"
    )
  ).toBeVisible();

  // test without items
  rerender(
    <NoticeBox
      recordCount={20}
      planRecordLimit={100}
      hasBeenIndexed={true}
      hasValidData={true}
      hasItems={false}
    ></NoticeBox>
  );

  expect(
    screen.getByText(
      "We weren’t able to locate any content to Search to index. Perhaps you don't yet have any posts or pages?"
    )
  ).toBeVisible();

  // test when over planRecordLimit
  rerender(
    <NoticeBox
      recordCount={120}
      planRecordLimit={100}
      hasBeenIndexed={true}
      hasValidData={true}
      hasItems={true}
    ></NoticeBox>
  );

  expect(
    screen.getByText(
      "You recently surpassed 100 records and will be automatically upgraded to the next billing tier of 1000 max records. Learn more."
    )
  ).toBeVisible();

  // test when close to planRecordLimit
  rerender(
    <NoticeBox
      recordCount={95}
      planRecordLimit={100}
      hasBeenIndexed={true}
      hasValidData={true}
      hasItems={true}
    ></NoticeBox>
  );

  expect(
    screen.getByText(
      "You’re close to the max amount of records for this billing tier. Once you hit 100 indexed records, you’ll automatically be billed in the next tier. Learn more."
    )
  ).toBeVisible();

});
