import './loader.css'

function Loader({styleContent, styleTrailer}) {
    return (
        <div className={styleContent || styleTrailer}>
            <h3>Carregando...</h3>
            <div className="loader">{/* Loader Animation */}</div>
        </div>
    );
}

export default Loader;