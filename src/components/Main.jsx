import React, { useEffect, useState } from 'react'

const url = "https://pokeapi.co/api/v2/pokemon?limit=10"

function Main() {
    const [pokeData, setPokeData] = useState([]);

    const getPokeData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log('fetched data: ', data.results);
    }

    useEffect(() => {
        getPokeData();
    }, []);

    return (
        <div>Main</div>
    )
}

export default Main