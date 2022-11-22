import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Img11 from '../assets/img/image11.png'
import { changeName } from '../store/slices/name.slice';
const Home = () => {

    const [userName, setUserName] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const enterName = () => {
        dispatch(changeName(userName))
        navigate("/pokemons")
    }


    return (
        <div>
            <img src={Img11} alt="" />
            <h1>
                !Hola entrenador!
            </h1>
            <h2>
                Para poder comenzar, dame tu nombre
            </h2>
            <input 
            type="text" 
            onChange={e => setUserName(e.target.value)}
            value={userName}
            />
            <button onClick={enterName}>
                Comenzar
            </button>
        </div>
    );
};

export default Home;