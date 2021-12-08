export default function getFeeds() {
  let data,
    plandata = null;

  data = {
    last_indexed_date: "2021-07-06T19:35:18+00:00",
    post_count: 249,
    post_type_breakdown: {
      post: 104,
      page: 17,
      attachment: 15,
      anotherone: 21,
      averyveryextrasuperlongernamesposttypethatgoesonandonandone: 38,
      more: 22,
      andmore: 4,
      moremoremore: 2,
      andthenmore: 6,
      somany: 20,
    },
  };

  plandata = {
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

  // stop it right here if there's no data to use
  if (!data || !plandata) {
    return [null, null, null];
  }

  // set max number of record types to display
  let maxRecordCount = 5;

  // sets up some basic counts and arrays
  let feeds = [];
  let postTypeBreakdown = [];
  let currentCount = 0;

  // make sure there are items there before going any further
  let numItems = data.post_type_breakdown
    ? Object.keys(data.post_type_breakdown).length
    : null;
  let tier = plandata.search_subscriptions
    ? Object.values(plandata.search_subscriptions[0])[22]
    : null;

  // set up an array of Jetpack suitable chart colors to use (note: there must be at least the same number of colors here as set in 'maxrecordcount' var)
  // this will be coming from @automattic/color-studio once ported into wp-admin
  let colors = ["#00BA37", "#3895BA", "#E68B28", "#AF7DD1", "#DEB100"];

  if (numItems > 0) {
    for (var i = 0; i < numItems; i++) {
      let theData = Object.values(data.post_type_breakdown)[i];
      let name = capitalizeFirstLetter(
        Object.keys(data.post_type_breakdown)[i]
      );

      postTypeBreakdown.push({
        data: createData(theData, colors[i], name),
      });
      currentCount = currentCount + theData;
    }
  }

  // sort post types by count size
  postTypeBreakdown.sort((a, b) => (a.data.data[0] < b.data.data[0] ? 1 : -1));

  // slice post type breakdown items after they are sorted & make sure limit is not used if higher than record count
  let count = maxRecordCount <= numItems ? maxRecordCount : numItems;

  const includedItems = postTypeBreakdown.slice(0, count);
  const otherItems = postTypeBreakdown.slice(count, numItems);

  // push includedItems into the feeds
  for (var item in includedItems) {
    feeds.push({
      data: createData(
        includedItems[item].data.data[0],
        colors[item],
        includedItems[item].data.label
      ),
    });
  }

  // populate the 'other' category with combined remaining items and push to end of data array
  feeds.push({
    data: createData(
      createOtherCategory(otherItems),
      "	rgb(169,169,169)",
      "Other"
    ),
  });

  // add filler spacing for remaining unused space
  feeds.push({
    data: createData((tier-currentCount),"rgb(245,245,245)","Remaining"),
  });

  // trying some error handling
  if (currentCount == 0 || tier == 0 || !tier || !currentCount) {
    return null;
  }

  // return [feeds, tier, currentCount];
  return {
    data: feeds,
    tier: tier,
    recordCount: currentCount,
  };
}

// function to combine remaining items into 'other' category
function createOtherCategory(otherItems) {
  let runningTotal = 0;

  for (var item in otherItems) {
    runningTotal = otherItems[item].data.data[0] + runningTotal;
  }

  return runningTotal;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createData(data, color, name) {
  return {
    data: [data],
    label: name,
    backgroundColor: color,
  };
}
