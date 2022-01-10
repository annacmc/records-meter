import React from "react";
import "./App.css";
import getFeeds from "./lib/getFeeds.js";
import getData from "./lib/getData.js";
import { BarChart } from "./components/BarChart";
import { RecordCount } from "./components/RecordCount";
import { NoticeBox } from "./components/NoticeBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: getFeeds(getData().data, getData().planInfo),
    };
  }

  render() {
    return (
      <main>
        <NoticeBox errors={this.state.feed.errors} className={this.state.feed.noticeBoxClassName}></NoticeBox>
        <RecordCount
          recordCount={this.state.feed.recordCount}
          planRecordLimit={this.state.feed.tier}
        />
        <BarChart data={this.state.feed.data} />
      </main>
    );
  }
}
export default App;
