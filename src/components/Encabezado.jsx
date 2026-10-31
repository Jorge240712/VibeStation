function Encabezado({ titulo, totalFavoritas }) {
    return (
        <header className="cabecera-principal">
            <div className="cabecera-identidad">
                <img
                    src="/logo-cabina.svg"
                    alt="Emblema de Vibe Station: un dial de radio con una estrella"
                    className="cabina-logo"
                />
                <div>
                    <p className="cabecera-etiqueta">ESTACIÓN UMBRAL · 98.5 FM</p>
                    <h1>{titulo}</h1>
                </div>
            </div>
            <div className="info-favoritas" aria-live="polite">
                <span aria-hidden="true">♥</span> {totalFavoritas} favoritas
            </div>
        </header>
    );
}

export default Encabezado;