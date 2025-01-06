import React, { useEffect, useState } from 'react'

const url = "https://pokeapi.co/api/v2/pokemon?limit=10"

function Main() {
    const [pokeData, setPokeData] = useState([]);

    const getPokeData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log('fetched data: ', data.results);
        getPokeDetail(data.results);
    }

    const getPokeDetail = async (results) => {
        const promises = results.map(async (mon) => {
            const response = await fetch(mon.url);
            return await response.json();
        })
        const result = await Promise.all(promises);
        setPokeData(result);
    }

    useEffect(() => {
        getPokeData();
    }, []);

    return (
        <div>
            {pokeData.map((mon) => {
                return (
                    <div>
                        <h2>{mon.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Main