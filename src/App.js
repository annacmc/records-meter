  // src/App.js

  import React, {Component} from 'react';

  class App extends Component {

    state = {
      results: []
    }

    // this will need to fetch GET /sites/<site_id>/jetpack-search-stats on WPCOM V2 once auth is configured

    componentDidMount() {
      fetch('')
      .then(res => res.json())
      .then((data) => {
        this.setState({ results: data })
      })
      .catch(console.log)
    }

    render () {
      return (
        // JSX to render goes here...
      );
    }
  }

  export default App;