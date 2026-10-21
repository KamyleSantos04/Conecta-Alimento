import './index.scss'
import { Link } from 'react-router-dom'

export default function ComoFunciona() {
  return (
    <div className='Geral'>
     <img src='./assets/images/logo.png' alt='' width={150}/>
     <Link to='/'>Voltar</Link>
    </div>
  );
}