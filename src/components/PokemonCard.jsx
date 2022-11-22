import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    return (
        <Link to={`/pokemons/${pokemon.id}`}>
            <div className='pokemonCard'>
                <img src={pokemon.sprites?.other?.home?.front_default} alt="" id='imgpokemon' />
                <div className='pokemonCh'>
                    <p>
                        {pokemon.name}
                    </p>
                    <p>
                        {pokemon.types?.[0]?.type?.name} {pokemon.types?.[1]?.type?.name == null ? null : "/"} {pokemon.types?.[1]?.type?.name === null ? null : pokemon.types?.[1]?.type?.name}
                    </p>
                    <p>
                        HP {pokemon.stats?.[0]?.base_stat}
                    </p>
                    <p>
                        Attack {pokemon.stats?.[1]?.base_stat}
                    </p>
                    <p>
                        Defense {pokemon.stats?.[2]?.base_stat}
                    </p>
                    <p>
                        Speed {pokemon.stats?.[5]?.base_stat}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;