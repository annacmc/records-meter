  // src/App.js

  import React, {Component} from 'react';

  class App extends Component {

    constructor(props){
      super(props)
      this.state = {
        interests: []
      }
    }
 
  async componentDidMount() {
    const response = await fetch( 'https://public-api.wordpress.com/wpcom/v2/read/interests' );
    const json = await response.json();
    this.setState( { response: json } );
    console.log( json );
  }
 
  render() {
    return (
        <div className="App">
          <h1>Reader interests</h1>
          <ul>
            { this.state.response?.interests.map( interest => ( <li key={interest.slug}>{interest.title}</li>) ) }
          </ul>
        </div>
    );
  }
}

  export default App;