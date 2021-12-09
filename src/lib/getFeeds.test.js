import * as getFeeds from "./getFeeds";

const testData = {
  last_indexed_date: "2021-07-06T19:35:18+00:00",
  post_count: 136,
  post_type_breakdown: {
    post: 104,
    page: 17,
    attachment: 15,
  },
};

test("compares post_count to post_type_breakdown summed", () => {
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  expect(testData.post_count).toEqual(sumValues(testData.post_type_breakdown));
});

test("tests creating a data object using createData", () => {

  const newObject = getFeeds.createData(20,"rgb(245,245,245)",
  "Testing");

  expect(newObject).toEqual({
    data: [20],
    label: "Testing",
    backgroundColor: "rgb(245,245,245)",
  });
});
