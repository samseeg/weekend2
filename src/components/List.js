import React, { Component } from 'react';

export default class List extends Component {

    render() {
        return (
            <header className="listHeader">
                <div className="button">
                    Button
                </div>
                <ul className="list">
                    {
                        this.props.itemList.map((item, i) => {
                    return(
                    <li key={i}>{item}</li>

                    ) 
                    })
                    }
                    </ul>
                </header>
        )
    }
}