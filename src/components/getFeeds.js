

export default function getFeeds() {

    let feeds = [];
    let numItems = 9;

    for(var i = 0; i < numItems; i++) {
  
    feeds.push({
      data: getRandomArray(),
    });

  }
    return (feeds);
  }

// Data generation for dummy data
function getRandomArray() {
  // Create random array of objects
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let colors = ['rgb(255, 99, 132)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)','rgb(255, 205, 86)'];
  let data = [Math.round(20 + 80 * Math.random())];
    return {
      data: data,
      label: names[Math.floor(Math.random()*names.length)]+" ("+data+")",
      backgroundColor: colors[Math.floor(Math.random()*colors.length)],
      
    };

}