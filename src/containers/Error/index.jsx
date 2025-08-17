import './error.css';

import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>Oops! página não encontrada.</p>
            <Link to='/'>Voltar ao Início</Link>
        </div>
    )
}

export default Error;