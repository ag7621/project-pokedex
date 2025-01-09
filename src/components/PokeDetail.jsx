import React from 'react'

function PokeDetail({ mon }) {
    return (
        <div key={mon.id}>
            <img src={mon.sprites.front_shiny} alt="" />
            <h2>{mon.name}</h2>
            <p>id: {mon.id}</p>
            <p>height: {mon.height}</p>
            <p>weight: {mon.weight}</p>
        </div>
    )
}

export default PokeDetail