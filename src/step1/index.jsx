import React, { Component } from 'react';

const types = ["wonderful", "cruel", "awesome", "dreadful"];

export class Step1 extends Component {

  render() {
    
    let type = types[Math.floor((Math.random() * types.length))];

    return (
      <div>
        <h1> Step 1 - basic component</h1>
        <h2> Hello, {type} world! </h2>
      </div>
    );
  }
}