import React, { Component } from 'react';
import { PlayerCardB } from '../PlayerCard';
import { Border } from '../Border';
 
export class PlayerAction extends Component {
    render(){
        return (
            <div>
                <Border>    
                    <PlayerCardB {...this.props} />
                </Border>
                <button onClick={() => this.props.onAction(this.props.player)}> {this.props.children} </button>
            </div>
        );
    }
}
