import React, { useState } from 'react';

export default function getFeeds() {
  let feeds = [];
  let numItems = 5;
  let totalCount = 1000;
  let currentCount = 0;
  let colors = [
    "#3895BA",
    "#E68B28",
    "#AF7DD1",
    "#00BA37",
    "#DEB100",
  ];

  for (var i = 0; i < numItems; i++) {

    let mydata = getRandomArray(colors[i])
    
    feeds.push({
      data: mydata,
    });
    currentCount = currentCount + mydata.data[0]
  }

  feeds.push({
    data: getRemainingSpace(totalCount,currentCount),
  });

  return feeds;
}

// Data generation for dummy data
function getRandomArray(color) {
  // Create random array of objects
  let names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let data = [Math.round(20 + 80 * Math.random())];

  return {
    data: data,
    label: names[Math.floor(Math.random() * names.length)] + " (" + data + ")",
    backgroundColor: color,
  };
}

// Generation of empty space (to work with ChartJS styling)
function getRemainingSpace(total,current) {
  let data = total - current
  return {
    data: [data],
    label: "Remaining"+ " (" + data + ")",
    backgroundColor: "rgb(245,245,245)",
  };
}
