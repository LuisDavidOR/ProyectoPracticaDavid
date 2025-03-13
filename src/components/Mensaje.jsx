const Mensaje = ({titulo, contenido}) => {
    return(
        <>
        <h2 className="titulo">{titulo}</h2>
        <p className="texto">{contenido}</p>
        </>
    )
}

export default Mensaje;