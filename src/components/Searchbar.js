import React, { Component } from 'react';

export default class Searchbar extends Component {

    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    render() {
        return (
            <div className="search">
                <input className="search" type="text" value={this.state.input} onChange={(e) => {
                    this.setState({
                        input: e.target.value
                    })
                }} />
                <div className="button" onClick={() => this.props.add(this.state.input)}>
                    Button
                    </div>

            </div>
        )
    }
}