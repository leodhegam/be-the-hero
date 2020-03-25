import React ,{ useState } from 'react'
import { Link ,useHistory } from 'react-router-dom'
import api from '../../services/api'
import { FiArrowLeft } from 'react-icons/fi';
import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
export default function NewIncident() {

    const history = useHistory();
    const ongId = localStorage.getItem('ongId')
    const [title , setTitle] = useState();
    const [description , setDescription] = useState();
    const [value , setValue] = useState();

   async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try {
        await api.post('/incidents', data , {
            headers:{
                Authorization: ongId, }
        });

        history.push('/profile');

        }catch (err){
            alert('Erro ao cadastrar caso!')
        }
    }

    return (
        <Container>
            <Content>
                <section>
                    <img src={logoImg} alt=""/>
                    <h1>Cadastrar novo  caso</h1>
                    <p> Descreva o caso detalhadament para encontrar um herói 
                      para resolver isso
                    </p>

                    <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#e02041"/>
              Voltar para home
            </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                <input 
               value={title} onChange={e => setTitle(e.target.value)} 
                placeholder="Titulo do caso"/>
                <textarea  
               value={description} onChange={e => setDescription(e.target.value)} 
                placeholder="Descrição"/>
                <input 
               value={value} onChange={e => setValue(e.target.value)} 
                placeholder="Valor em reais"/>
                
                <button className="button" type="submit">Cadastrar</button>
                </form>
            </Content>
        </Container>
    )
}
