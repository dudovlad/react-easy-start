import React, { Component } from 'react';
import './style.css';

export class PlayerAdd extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            club: "",
            age: 18,
            value: 0
        };
    }

    onNameChanged = (e) => this.setState({name: e.target.value});
    onClubChanged = (e) => this.setState({club: e.target.value});
    onAgeChanged = (e) => this.setState({age: e.target.value});
    onValueChanged = (e) => this.setState({value: e.target.value});

    onAdd = () => {
        this.props.onAdd(this.state);
    }

    render(){
        return (
        <div className="playerAdd">
            <form>
                <div className="box">
                    <label className="mr-1" htmlFor="playerName"> Name: </label>
                    <input 
                        value={this.state.name} 
                        id="playerName"
                        onChange={this.onNameChanged}/>
                </div>
                <div className="box">
                    <label className="mr-1" htmlFor="playerClub"> Club: </label>
                    <input
                        value={this.state.club}
                        id="playerClub"
                        onChange={this.onClubChanged}/>
                </div>
                <div className="box">
                    <label className="mr-1" htmlFor="playerAge"> Age: </label>
                    <input 
                        type="number"
                        value={this.state.age}
                        id="playerAge"
                        onChange={this.onAgeChanged}/>
                </div>
                <div className="box">
                    <label className="mr-1" htmlFor="playerValue"> Value: </label>
                    <input 
                        type="number"
                        value={this.state.value}
                        id="playerValue"
                        onChange={this.onValueChanged}/>
                </div>
                <button 
                    onClick={this.onAdd}
                    type="button"
                > Add Player </button>
            </form>
        </div>);
    }
}