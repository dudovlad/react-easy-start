import React, { Component } from 'react';

export class Step3 extends Component {
    log = [];
    counter = 0;
    interval = 0;
    
    constructor(){
        super();
        this.trace("ctor");

        this.counter = 22;
    }

    trace(str){
        console.log(str);
        this.log.push(str);
    }

    componentWillMount(){
        this.trace("component will mount");
    }

    componentDidMount(){
        this.trace("component did mount");
        this.timer = setInterval(() => {
            this.trace(`tic ${this.counter++}`);
        }, 5000);
    }

    componentWillUnmount(){
        this.trace("component will unmount");
        clearInterval(this.timer);
    }

    renderLog(){
        return <ul>
        {
            this.log.map((x, i) => <li key={i}>{x}</li>)
        }
        </ul>;
    }

    render() {
        return (
        <div>
            <h1>Step 3 - Basic Component's lifecycle</h1>            
            <div>
                Counter: {this.counter}
            </div>
            <div>
                {this.renderLog()}
            </div>
        </div>
        );
    }
}