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
        <RecordCount recordCount={10} planRecordLimit={100} />
        <BarChart data={this.state.feed[0]} />
      </main>
    );
  }
}
export default App;
