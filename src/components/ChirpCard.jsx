import React from 'react'

const ChirpCard = ({ chirp: { name, message } }) => {
    return (
        <article className="col-md-8 offset-md-2">
            <div className="card p-3 shadow">
                <div className="card-body">
                    <h4 className="card-title">{name} said:</h4>
                    <p className="card-text">{message}</p>
                </div>
            </div>
        </article>
    );
}

export default ChirpCard;