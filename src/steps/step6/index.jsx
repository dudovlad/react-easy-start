import React, { Component } from 'react';
import {players} from '../../data/players';
import {Border} from '../../components/Border';
import {PlayerAction} from '../../components/PlayerAction';
import {PlayerCardA} from '../../components/PlayerCard';

export class Step6 extends Component {

    constructor(){
        super();
        this.state = {
            budget: 400,
            marketPlayers: players,
            players: []
        };
    }

    onBuy = (p) => {
        this.setState((prev) => (
            {
                budget: prev.budget - p.value,
                marketPlayers: prev.marketPlayers.filter(x => x.id != p.id),
                players: [...prev.players, p]
            }));
    }

    onCancel = (p) => {
        this.setState((prev) => (
            {
                budget: prev.budget + p.value,
                players: prev.players.filter(x => x.id != p.id),
                marketPlayers: [...prev.marketPlayers, p]
            }));
    }

    render(){
        return (
            <div style={{width:"1000px"}}>
                <h1>Step 6 - Contaiment and Specialization</h1>
                <h2>Buy players for your team</h2>
                <h3>Your budget is €{this.state.budget}M </h3>
                <h2>Available players</h2>
                <div className='box'>
                    {
                        this.state.marketPlayers.map((p,i) => 
                            <div className='mr-1' key={i}> 
                                <PlayerAction player={p} onAction={this.onBuy}>
                                    <h3>
                                        Buy
                                    </h3>
                                </PlayerAction>
                            </div>
                        )
                    }
                </div>

                <h2>Your selection </h2>
                <div className='box'>
                    {
                        this.state.players.map((p,i) => 
                            <div className='mr-1' key={i}>                            
                                <PlayerAction player={p} onAction={this.onCancel}>
                                    <h3>
                                        Cancel
                                    </h3>   
                                </PlayerAction>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}