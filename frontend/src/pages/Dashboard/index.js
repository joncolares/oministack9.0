import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './style.css';

export default function Dashboard(){
    const [spots, setSpots] = useState([])
    useEffect(() => {
        async function loadSpots(){
            const user_id = localStorage.getItem('user');
            const response  = await api.get('/dashboard', {
                headers: { user_id}
            });
            setSpots(response.data);
        }
        loadSpots();
        
    }, []);

    return(
        <>
        <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}>
                    <header style={{ backgroundImage: `url(${spot.imagem_url})` }} />
                    <strong>{spot.empresa}</strong>
                    <span>{spot.valor ? `R$: ${spot.valor} / Dia` : 'Gratuito'}</span>
                </li>
            ))}
        </ul>

           <Link to="/new">
                <button className="btn">Cadastrar novo Spot</button>
           </Link> 

        </>
    );
}