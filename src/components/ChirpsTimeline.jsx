import React, { Component } from 'react'
import ChirpCard from './ChirpCard';

export default class ChirpsTimeline extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="row mt-5">
                {this.props.chirpsArray.map((chirp, i) => <ChirpCard key={`chirp-${i}`} chirp={chirp} />)}
            </section>
        )
    }
}
