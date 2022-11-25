import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    return (
        <Link to={`/pokemons/${pokemon.id}`}>
            <Card style={{ width: '18rem' }} className='pokecard'>
                <Card.Img variant="top" src={pokemon.sprites?.other?.home?.front_default} />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Text>
                        {pokemon.types?.[0]?.type?.name} {pokemon.types?.[1]?.type?.name == null ? null : "/"} {pokemon.types?.[1]?.type?.name === null ? null : pokemon.types?.[1]?.type?.name}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>HP {pokemon.stats?.[0]?.base_stat}</ListGroup.Item>
                    <ListGroup.Item>Attack {pokemon.stats?.[1]?.base_stat}</ListGroup.Item>
                    <ListGroup.Item>Defense {pokemon.stats?.[2]?.base_stat}</ListGroup.Item>
                    <ListGroup.Item>Speed {pokemon.stats?.[5]?.base_stat}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Link>

    );
};

export default PokemonCard;