import React, { Component } from 'react';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount(){
    console.log("Feed Mounted!")
  }

  render() {
    return(
      <div>
      <h3>This is the Feed</h3>
      </div>
    )
  }
}

export default Feed;
