import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Pokemons = () => {

    const userName = useSelector(state => state.name)
    const [dataPokemons, setDataPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [types, setTypes] = useState([])


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setTypes(res.data.results))
    }, [])


    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1100/")
            .then(res => setDataPokemons(res.data.results))
    }, [])

    const navigate = useNavigate()

    const searchPokemon = () => {
        navigate(`/pokemons/${pokemonName.toLowerCase()}`)
    }

    const filterType = (e) => {
        axios.get(e.target.value)
            .then(res => setDataPokemons(res.data.pokemon))
    }


    const [page, setPage] = useState(1)
    const pokemonsPerPages = 20
    const lastIndex = page * pokemonsPerPages
    const firtsIndex = lastIndex - pokemonsPerPages
    const pokemonPaginated = dataPokemons.slice(firtsIndex, lastIndex)
    const totalPages = Math.ceil(dataPokemons.length / pokemonsPerPages)

    const numbers = []

    for (let i = 1; i <= totalPages; i++) {
        numbers.push(i)
    }

    console.log(numbers)

    return (
        <div>
            <svg width="1440" height="203" viewBox="0 0 1440 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_20_956)">
                    <rect width="1440" height="123.181" fill="#DD1A1A" />
                    <rect y="111.295" width="1440" height="49.7047" fill="#0C0C0C" />
                    <circle cx="1296.5" cy="136.5" r="52.5" fill="white" stroke="black" strokeWidth="12" />
                    <circle cx="1296.5" cy="136.5" r="25.5" fill="#212121" stroke="black" strokeWidth="12" />
                </g>
                <defs>
                    <filter id="filter0_d_20_956" x="-4" y="0" width="1448" height="203" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_956" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_956" result="shape" />
                    </filter>
                </defs>
            </svg>
            <h1>
                Bienvenido {userName}, aqu?? podr??s encontrar tu pokem??n favorito
            </h1>
            <div className='search'>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg"
                    onClick={searchPokemon}>Search</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder='search pokemon'
                        onChange={e => setPokemonName(e.target.value)}
                        value={pokemonName}
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <Form.Select aria-label="Default select example" onChange={filterType} name="" id="">
                    <option>Open this select menu</option>
                    {types.map(type => (
                        <option value={type.url} key={type.name}>{type.name}</option>
                    ))}
                </Form.Select>
            </div>
            <div className='pokemons'>
                {pokemonPaginated.map(pokemon => (
                    <PokemonCard
                        url={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
                        key={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
                    />
                ))}
            </div>
            <Pagination className='pagination'>
                <Pagination.Prev
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                />
                {numbers.map(number => (
                    <Pagination.Item onClick={() => setPage(number)} key={number}>{number}</Pagination.Item>
                ))}
                <Pagination.Next
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                />
            </Pagination>
        </div>
    );
};

export default Pokemons;