import React, { Component } from 'react';

export default class List extends Component {

    constructor() {
        super();
        this.state = {
            visibility: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ visibility: !this.state.visibility });
    }

    render() {
        return (
            <header className="listHeader">
                <div className="button" onClick={() => this.onClick()}>
                    Show list
                </div>
                {this.state.visibility ?
                    <ul className="list">
                        { 
                            this.props.itemList.map((item, i) => {
                                if (item.length >= 1) {
                                return (
                                    <li key={i}>{item}</li>
                                )
                                }
                            })
                        }
                    </ul>
                    : null}
            </header>
        )
    }
}