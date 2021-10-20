export default function getFeeds() {
    let feeds = [];
  
    feeds.push({
      title: 'Sample Data',
      data: getRandomArray(10)
    });
  
    return (feeds);
  }

  // Data generation
function getRandomArray(numItems) {
  // Create random array of objects
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}