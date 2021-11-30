import React from "react";
import "./App.css";
import getFeeds from "./lib/getFeeds.js";
import { BarChart } from "./components/BarChart";
import { RecordCount } from "./components/RecordCount";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: getFeeds(),
    };
  }

  render() {
    return (
      <main>
        <RecordCount recordCount={this.state.feed.recordCount} planRecordLimit={this.state.feed.tier} />
        <BarChart data={this.state.feed.data} />
      </main>
    );
  }
}
export default App;
