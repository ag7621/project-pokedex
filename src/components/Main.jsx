import React, { useEffect, useState } from 'react'
import PokeDetail from './PokeDetail';

const url = "https://pokeapi.co/api/v2/pokemon?limit=5"

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

    useEffect(() => {
        console.log("pokedata changes: ", pokeData)
        pokeData.forEach((mon) => {
            console.log(mon)
        })
    }, [pokeData]);

    return (
        <div>
            {pokeData.map((mon) => {
                return (
                    <>
                        {/* <div key={mon.id}>
                            <img src={mon.sprites.front_default} alt="" />
                            <h2>{mon.name}</h2>
                        </div> */}

                        <PokeDetail mon={mon} key={mon.id} />

                    </>
                )
            })}
        </div>
    )
}

export default Main