import React, { Component } from 'react';

class Me extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount(){
    console.log("Me Mounted!")
  }

  render() {
    return(
      <div>
      <h3>This is the Me</h3>
      </div>
    )
  }
}

export default Me;
