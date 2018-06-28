import React, { Component } from 'react';
import { players } from '../../data/players';
import './style.css';

export class Step2 extends Component {
    constructor() {
        super();
        this.state = { sortByKey: 'id' };
    }

    renderValue(player) {
        return <span className='highlight'>€{player.value}M</span>;
    }

    getTableHeaderClassName(columnName){
        return this.state.sortByKey==columnName ? 'filterColumn' : '';
    }

    renderTableHeader = () => (
        <thead>
            <tr>
                <th onClick={e => this.onSort('id') } className = {this.getTableHeaderClassName('id')}>
                    Id
                </th>
                <th onClick={e => this.onSort('name')} className = {this.getTableHeaderClassName('name')}>
                    Name
                </th>
                <th onClick={e => this.onSort('club')} className = {this.getTableHeaderClassName('club')}>
                    Club
                </th>
                <th onClick={e => this.onSort('age')} className = {this.getTableHeaderClassName('age')}>
                    Age
                </th>
                <th onClick={e => this.onSort('value')} className = {this.getTableHeaderClassName('value')}>
                    Value
                </th>
            </tr>
        </thead>
    );

    onSort(sortByKey){
        this.setState({sortByKey});
    }

    renderRow = (p, id) => (
        <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.club}</td>
            <td>{p.age}</td>
            <td>{this.renderValue(p)}</td>
        </tr>
    );

    sortPlayers = (a, b) => a[this.state.sortByKey].toString().localeCompare(b[this.state.sortByKey]);

    renderTable(){
        return (
            <table style={{marginTop: "100px"}}>
                {this.renderTableHeader()}
                <tbody>
                    {
                        players
                            .sort(this.sortPlayers)
                            .map(this.renderRow)
                    }
                </tbody>
            </table>
        );
    }

    render() {
        return (
        <div>
            <h1> Step 2 - JSX in depth </h1>
            <h2> Top 5 players sorted by age </h2>
            <div>
                {this.renderTable()}
            </div>
        </div>
        );
    }
}