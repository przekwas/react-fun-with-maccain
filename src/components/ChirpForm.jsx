import React, { Component } from 'react'

export default class ChirpForm extends Component {
    render() {
        return (
            <form className="form-group p-3 border border-dark rounded shadow-lg">
                <label>User:</label>
                <input
                    value={this.props.values.user}
                    onChange={this.props.handlers.handleUserChange}
                    className="form-control my-1 shadow-lg" type="text" />
                <label>Message:</label>
                <input
                    value={this.props.values.message}
                    onChange={this.props.handlers.handleMessageChange}
                    className="form-control my-1 shadow-lg" type="text" />
                <button
                    onClick={this.props.handlers.handleClick}
                    className="btn btn-primary btn-block mt-3">Chirp It!</button>
            </form>
        )
    }
}
