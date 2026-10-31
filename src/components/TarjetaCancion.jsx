function TarjetaCancion({ 
    id, 
    titulo, 
    artista, 
    album, 
    duracion, 
    portada, 
    anio, 
    reproducciones, 
    favorita, 
    energia, 
    onFavorita 
}) {
    return (
        <article className="tarjeta-cancion">
            <img src={portada} alt={`Portada de ${titulo}`} className="tarjeta-portada" />
            <div className="tarjeta-info">
                <div className="tarjeta-cabecera">
                    <div>
                        <h3>{titulo}</h3>
                        <p className="tarjeta-artista">{artista}</p>
                    </div>
                    {favorita && <span className="etiqueta-favorita">FAVORITA</span>}
                </div>
                <p className="tarjeta-album">{album} · {anio}</p>
                <p className="detalles">{duracion} <span aria-hidden="true">·</span> {reproducciones.toLocaleString("es-AR")} reproducciones</p>
                <div className="energia-etiqueta">
                    <span>ENERGÍA</span>
                    <span>{energia}%</span>
                </div>
                <div
                    className="barra-energia"
                    role="meter"
                    aria-label={`Energía de ${titulo}`}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={energia}
                >
                    <div className="barra-energia-relleno" style={{ width: `${energia}%` }} />
                </div>
                <button
                    className={favorita ? "boton-favorita activa" : "boton-favorita"}
                    type="button"
                    aria-pressed={favorita}
                    onClick={() => onFavorita(id)}
                >
                    {favorita ? "Quitar de favoritas" : "Marcar favorita"}
                </button>
            </div>
        </article>
    );
}

export default TarjetaCancion;
