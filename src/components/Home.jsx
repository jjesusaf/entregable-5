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
        <div className='home'>
            <div className='poke-home'>
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
            <div className='svg-home'>
                <div className='footer'>
                    <svg width="1440" height="154" viewBox="0 0 1440 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1440" height="123.181" fill="#DD1A1A" />
                        <rect y="92" width="1440" height="69" fill="#0C0C0C" />
                        <circle cx="720.5" cy="102.5" r="52.5" fill="white" stroke="black" strokeWidth="12" />
                        <circle cx="720.5" cy="102.5" r="25.5" fill="#212121" stroke="black" strokeWidth="12" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Home;