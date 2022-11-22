import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [])

    console.log(pokemon)

    return (
        <div>
            <img src={pokemon.sprites?.other?.home?.front_default} alt="" />
            <h1>
                {pokemon.name}
            </h1>
            <div>
                <p>
                    Weight: {pokemon.weight}
                </p>
                <p>
                    Height: {pokemon.height}
                </p>
            </div>
            <div>
                <p>
                    Types: <br />
                    {pokemon.types?.[0]?.type?.name} {pokemon.types?.[1]?.type?.name == null ? null : "/"} {pokemon.types?.[1]?.type?.name === null ? null : pokemon.types?.[1]?.type?.name}
                </p>
            </div>
            <div>
                <p>
                    Abilities: <br />
                    {pokemon.abilities?.[0]?.ability?.name} {pokemon.abilities?.[1]?.ability?.name == null ? null : "/"} {pokemon.abilities?.[1]?.ability?.name === null ? null : pokemon.abilities?.[1]?.ability?.name}
                </p>
            </div>
            <div>
                Stats: <br />
            </div>
            <div>
                Movements:
                {pokemon.moves.map(move => (
                    <ul>
                        <li>
                           {move.move.name} 
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default PokemonDetail;