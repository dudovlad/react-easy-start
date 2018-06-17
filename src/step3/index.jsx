import React, { Component } from 'react';

export class Step3 extends Component {
    log = [];
    
    constructor(){
        super();
        this.trace("ctor");
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
    }

    componentWillUnmount(){
        this.trace("component will unmount");
    }

    renderLog(){
        return <ul>{
            this.log.map((x, i) => <li key={i}>{x}</li>)
        }</ul>;
    }

    render() {
        return (
        <div>
            <h1>Step 3 - Component's lifecycle hooks</h1>
            <div>
                {this.renderLog()}
            </div>
        </div>
        );
    }
}