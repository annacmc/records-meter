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

const testPlanInfo = {
  search_subscriptions: [
    {
      ID: "17189738",
      user_id: "6487293",
      blog_id: "186671816",
      product_id: "2105",
      expiry: "2022-07-09",
      subscribed_date: "2021-06-09 07:33:14",
      renew: true,
      auto_renew: true,
      ownership_id: "27808225",
      most_recent_renew_date: "",
      subscription_status: "active",
      product_name: "Jetpack Search",
      product_name_en: "Jetpack Search",
      product_slug: "jetpack_search_monthly",
      product_type: "search",
      cost: 19,
      currency: "NZD",
      bill_period: "31",
      available: "yes",
      multi: true,
      support_document: null,
      is_instant_search: true,
      // tier: "up_to_1k_records",
      tier: 1000, // this needs work
    },
  ],
  supports_instant_search: true,
  supports_only_classic_search: false,
  supports_search: true,
  default_upgrade_bill_period: "monthly",
};

test("compares post_count to post_type_breakdown summed", () => {
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  expect(testData.post_count).toEqual(sumValues(testData.post_type_breakdown));
});

test("creates a data object using createData", () => {
  const newObject = getFeeds.createData(20, "rgb(245,245,245)", "Testing");

  expect(newObject).toEqual({
    data: [20],
    label: "Testing",
    backgroundColor: "rgb(245,245,245)",
  });
});

test("capitalizes first letter using capitalizeFirstLetter", () => {
  const stringToTest = "i am a string";
  const capializedString = getFeeds.capitalizeFirstLetter(stringToTest);

  expect(capializedString).toBe("I am a string");
});

test("combine count of remaining items", () => {
  const otherItems = [
    {
      data: {
        data: [17],
        label: "Page",
        backgroundColor: "#3895BA",
      },
    },
    {
      data: {
        data: [15],
        label: "Attachment",
        backgroundColor: "#E68B28",
      },
    },
    {
      data: {
        data: [6],
        label: "Andthenmore",
      },
    },
  ];
  const otherCategory = getFeeds.createOtherCategory(otherItems);

  expect(otherCategory).toBe(38);
});
