import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({history}){
   
    const [email, setEmail] = useState('');

  async function formsubmit(event){
    event.preventDefault();
    const response = await api.post('/sessions', {email:email});
    const { _id  } = response.data;
    //salva no banco de dados do navegador
    localStorage.setItem('user', _id);

    console.log(_id);
    history.push('/dashboard');
  }
    return (
        
    <>
        <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>

        <form onSubmit = {formsubmit}>

            <label htmlFor="email">E-MAIL *</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value = {email}
            onChange = {event => setEmail(event.target.value)}/>

            <button className="btn" type="submit">Entrar</button>

        </form>
    </>
      );
}