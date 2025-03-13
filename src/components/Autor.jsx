const Autor = ({nombre, correo}) => {
    return(
        <>
            <h4 className="principal">Nombre: <strong>{nombre}</strong></h4>
            <h4 className="subprincipal">Correo: {correo}</h4>
        </>
    );
}

export default Autor;