import React, { Component } from 'react';

export default class List extends Component {

    render() {
        return (
            <header className="listHeader">
                <div className="button">
                    Button
                </div>
                <ul className="list">
                    <li>list</li>
                    </ul>
                </header>
        )
    }
}