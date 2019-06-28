import React, { Component } from 'react'
import ChirpsTimeline from './components/ChirpsTimeline'
import initialChirps from './data/initialChirps'
import ChirpForm from './components/ChirpForm'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            message: '',
            chirps: [...initialChirps]
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleUserChange(e) {
        this.setState({ user: e.target.value });
    }

    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    handleClick(e) {
        e.preventDefault();
        const newChirp = {
            name: this.state.user,
            message: this.state.message
        };
        this.setState({
            chirps: [newChirp, ...this.state.chirps],
            user: '',
            message: ''
        });
    }

    render() {
        return (
            <main className="container">
                <section className="row mt-5">
                    <article className="col-md-6 offset-md-3">
                        <ChirpForm
                            values={{
                                user: this.state.user,
                                message: this.state.message
                            }}
                            handlers={{
                                handleMessageChange: this.handleMessageChange,
                                handleUserChange: this.handleUserChange,
                                handleClick: this.handleClick
                            }} />
                    </article>
                </section>
                <ChirpsTimeline chirpsArray={this.state.chirps} />
            </main>
        )
    }
}
