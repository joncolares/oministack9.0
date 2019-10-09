import React, {useState, useMemo} from 'react';
import camera from '../../assets/camera.svg';
import './style.css';
import api from '../../services/api';

export default function New({history}){
    const [empresa, setEmpresa] = useState('');
    const [tecnologias, setTecnologias] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState(null);


    const preview = useMemo(() => {
        return imagem ? URL.createObjectURL(imagem): null;
    }, [imagem]);

    async function handleSubmit(event){
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');


        data.append('imagem', imagem);
        data.append('empresa', empresa);
        data.append('tecnologias', tecnologias);
        data.append('valor', valor);

        await api.post('/spot', data, {
            headers: {user_id}
        });

        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="imagem" style={{ backgroundImage: `url(${preview})`}} 
            className={imagem ? 'has-imagem': ''}>
                <input type="file" onChange={event => setImagem(event.target.files[0])}/>
                <img src={camera} alt="Select Img"/>               
            </label>

            <label htmlFor="empresa">Empresa *</label>
            <input
            id="empresa"
            placeholder="Sua Empresa"
            value={empresa}
            onChange={event => setEmpresa(event.target.value)}
            />

            <label htmlFor="tecnologias">Tecnologias *<span>(Separadas por vírgula)</span></label>
            <input
            id="tecnologias"
            placeholder="Tecnologias da sua empresa"
            value={tecnologias}
            onChange={event => setTecnologias(event.target.value)}
            />
            <label htmlFor="valor">Valor da Diária *<span>(Campo vazio = Gratuito)</span></label>
            <input
            id="valor"
            placeholder="Valor Diária"
            value={valor}
            onChange={event => setValor(event.target.value)}
            />
            <button type="submit" className="btn">Cadastrar Spot</button>
        </form>
    );
}