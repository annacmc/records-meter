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
        <RecordCount recordCount={this.state.feed[2]} planRecordLimit={this.state.feed[1]} />
        <BarChart data={this.state.feed[0]} />
      </main>
    );
  }
}
export default App;
