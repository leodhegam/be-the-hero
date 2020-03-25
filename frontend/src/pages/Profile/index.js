import React ,{useState, useEffect }from 'react';
import { Link ,useHistory} from 'react-router-dom'; 
import api from '../../services/api'
import { Container } from './styles';
import { FiPower ,FiTrash2 } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
export default function Profile() {
    const history = useHistory();
    const [incidentes,setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
 
    useEffect(() => {
        api.get('profile', {
            headers:{Authorization : ongId ,
            }
        }).then(res => {
            setIncidents(res.data);
        })
    },[ongId]);

  async  function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {

                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidentes.filter(incident => incident.id !== id));
        }catch (err){
            alert('Erro ao deletar caso , tente novamente!')
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');

    }
    return (
    <Container>
        <header>
        <img src={logoImg} alt="BeTheHero"/>
        <span>Bem Vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
            Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
            <FiPower size={18} color="#E02041"/>
            
        </button>
        </header>
        <h1>Casos cadastrados</h1>

        <ul>
            {incidentes.map(incident => (
                <li key={incident.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>
                <strong>DESCRIÇÃO:</strong>
                <p>{incident.description}</p>
                <strong>Valor:</strong>
                <p>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}</p>

                <button onClick={()=> handleDeleteIncident(incident.id)} type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                     </button>
            </li>
            ))}
           
          
        </ul>
    </Container>
  );
}
