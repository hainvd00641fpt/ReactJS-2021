import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Color: { }</h3> - <h3>Fontsize: { }</h3>
                    <div className="border border-gray-500 h-auto container mt-4">
                        <p className="m-4">This is content change</p>
                    </div>
                </div>
            </div>
        )
    }
}
