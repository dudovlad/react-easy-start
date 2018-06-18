import React, { Component } from 'react';
import {players} from '../../data/players';
import {PlayerCardA, PlayerCardB} from '../../components/PlayerCard';
import {PlayerAdd} from '../../components/PlayerAdd';

export class Step4 extends Component {

    constructor(){
        super();
        this.state = {
            players: players
        };
    }

    onPlayerAdd = (p) => {
        let newPlayers = this.state.players.concat([p]);
        this.setState({players: newPlayers});
    }

    onPlayerAddBetterOne = (p) => this.setState({players: [...this.state.players, p]});
    
    onPlayerAddEvenMoreBetter = (p) => this.setState((prev) => ({players: [...prev.players, p]}));

    render(){
        return (
            <div>
                <h1>Step 4 - Props and State</h1>
                <h2>Add a new player </h2>
                <PlayerAdd onAdd={this.onPlayerAddEvenMoreBetter}/>
                <h2>Available players</h2>
                <div className='box'>
                    {
                        this.state.players.map((p,i) => 
                            <div className='mr-1' key={i}> 
                                <PlayerCardA player={p}/>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}