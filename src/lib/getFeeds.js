export default function getFeeds(data, planInfo) {
  // set max number of record types to display
  let maxRecordCount = 5;

  // sets up some basic counts and arrays
  let feeds = [];
  let postTypeBreakdown = [];
  let currentCount = 0;
  let hasValidData = true;
  let hasBeenIndexed = true;

  //check for valid data coming in and catch it before it goes to far
  if (
    "object" !== typeof data ||
    "object" !== typeof data.post_type_breakdown ||
    "object" !== typeof planInfo
  ) {
    hasValidData = false;
  }

  //check if site has likely been indexed.
  if (
    "undefined" === typeof data.last_indexed_date ||
    "undefined" === typeof data.post_count
  ) {
    hasBeenIndexed = false;
  }

  // make sure there are items there before going any further
  const numItems =
    hasValidData && hasBeenIndexed
      ? Object.keys(data.post_type_breakdown).length
      : 0;

  const count = maxRecordCount <= numItems ? maxRecordCount : numItems;

  let tier = Object.values(planInfo.search_subscriptions[0])[22];

  // set up an array of Jetpack suitable chart colors to use (note: there must be at least the same number of colors here as set in 'maxrecordcount' var)
  // this will be coming from @automattic/color-studio once ported into wp-admin
  let colors = ["#00BA37", "#3895BA", "#E68B28", "#AF7DD1", "#DEB100"];

  if (numItems > 0 && hasValidData && hasBeenIndexed) {
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

    // sort & split items into included and other
    const PostTypeItems = splitUsablePostTypes(
      postTypeBreakdown,
      numItems,
      maxRecordCount
    );

    // push includedItems into the feeds
    for (var item in PostTypeItems.includedItems) {
      feeds.push({
        data: createData(
          PostTypeItems.includedItems[item].data.data[0],
          colors[item],
          PostTypeItems.includedItems[item].data.label
        ),
      });
    }

    // populate the 'other' category with combined remaining items and push to end of data array
    if (PostTypeItems.otherItems.length > 0) {
      feeds.push({
        data: createData(
          combineOtherCount(PostTypeItems.otherItems),
          "rgb(169,169,169)",
          "Other"
        ),
      });
    }

    // if there is remaining unused space in tier, add filler spacing to chart
    if (tier - currentCount > 0) {
      feeds.push({
        data: createData(tier - currentCount, "rgb(245,245,245)", "Remaining"),
      });
    }
  }

  // return
  return {
    data: feeds,
  };
}

// function to decide which post types are being displayed,
// and which are combined into the 'other' category
export function splitUsablePostTypes(
  postTypeBreakdown,
  numItems,
  maxRecordCount
) {
  postTypeBreakdown.sort((a, b) => (a.data.data[0] < b.data.data[0] ? 1 : -1));

  let count = maxRecordCount <= numItems ? maxRecordCount : numItems;

  return {
    includedItems: postTypeBreakdown.slice(0, count),
    otherItems: postTypeBreakdown.slice(count, numItems),
  };
}

// function to combine remaining item count for use in 'other' category
// returns an int which is the sum of all remaining 'other' item type counts.
export function combineOtherCount(otherItems) {
  let runningTotal = 0;

  for (var item in otherItems) {
    runningTotal = otherItems[item].data.data[0] + runningTotal;
  }

  return runningTotal;
}

// function to capitalize the first letter of any string
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to return chart-ready data
export function createData(data, color, name) {
  return {
    data: [data],
    label: name,
    backgroundColor: color,
  };
}
