import React, { useState } from "react";

export class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
}

export default function getFeeds() {

  let data = {
    "last_indexed_date": "2021-07-06T19:35:18+00:00",
    "post_count": 159,
    "post_type_breakdown": {
      "post": 104,
      "page": 17,
      "attachment": 38,
    }
  };

  let plandata =  {
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

  let feeds = [];
  let numItems = Object.keys(data.post_type_breakdown).length;
  let totalCount = 1000;
  let currentCount = 0;
  let tier = Object.values(plandata.search_subscriptions[0])[22];

  let colors = ["#3895BA", "#E68B28", "#AF7DD1", "#00BA37", "#DEB100"];

  for (var i = 0; i < numItems; i++) {
    let theData = Object.values(data.post_type_breakdown)[i];
    let name = capitalizeFirstLetter(Object.keys(data.post_type_breakdown)[i]);

    feeds.push({
      data: createData(theData, colors[i], name),
    });

    currentCount = currentCount + theData;
  }

  // add filler spacing for remaining space
  feeds.push({
    data: getRemainingSpace(totalCount, currentCount),
  });

  console.log(capitalizeFirstLetter('foo bar bag'));

  return [feeds,tier,currentCount];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createData(data, color, name) {
  return {
    data: [data],
    label: name + "s (" + data + ")",
    backgroundColor: color,
  };
}

// Generation of empty space (to work with ChartJS styling)
function getRemainingSpace(total, current) {
  let data = total - current;
  return {
    data: [data],
    label: "Remaining" + " (" + data + ")",
    backgroundColor: "rgb(245,245,245)",
  };
}
