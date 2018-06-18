import React, { Component } from 'react';
import { players } from '../../data/players';
import './style.css';

export class Step2 extends Component {
    
    renderValue(player) {
        return <span className='highlight'>€{player.value}M</span>;
    }

    renderRow = (p, id) => (
        <tr key={id}>
            <td>{id+1}</td>
            <td>{p.name}</td>
            <td>{p.club}</td>
            <td>{p.age}</td>
            <td>{this.renderValue(p)}</td>
        </tr>
    );

    renderTableHeader = () => (
        <thead>
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
                <th>
                    Club
                </th>
                <th>
                    Age
                </th>
                <th>
                    Value
                </th>
            </tr>
        </thead>
    );

    renderTable(){
        let orderedPlayers = players.sort((a, b) => (a.age - b.age));
        return (
            <table style={{marginTop: "100px"}}>
                {this.renderTableHeader()}
                <tbody>
                    {orderedPlayers.map(this.renderRow)}
                </tbody>
            </table>
        );
    }

    render() {
        return (
        <div>
            <h1>Step 2 - JSX in depth</h1>
            <h2> Top 5 players sorted by age </h2>
            <div>
                {this.renderTable()}
            </div>
        </div>
        );
    }
}