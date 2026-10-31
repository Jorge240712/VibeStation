import { useState } from "react";

function RuletaNocturna({ nombreCabina, playlist, onPedir }) {
    const [indiceActual, setIndiceActual] = useState(0);
    const cancion = playlist[indiceActual] ?? playlist[0];

    function girarRuleta() {
        if (playlist.length < 2) return;

        const indiceAleatorio = Math.floor(Math.random() * (playlist.length - 1));
        setIndiceActual(
            indiceAleatorio >= indiceActual ? indiceAleatorio + 1 : indiceAleatorio
        );
    }

    return (
        <section className="ruleta-nocturna" aria-label={`Ruleta musical de ${nombreCabina}`}>
            <div className="ruleta-cabecera">
                <div>
                    <p className="ruleta-kicker">NO SABÉS QUÉ ESCUCHAR?</p>
                    <h2>Dejá que la noche elija</h2>
                </div>
                <span className="ruleta-icono" aria-hidden="true">✦</span>
            </div>

            {cancion ? (
                <>
                    <div className="ruleta-cancion" aria-live="polite">
                        <img src={cancion.portada} alt="" className="ruleta-portada" />
                        <div className="ruleta-detalle">
                            <span className="ruleta-etiqueta">TU PRÓXIMA CANCIÓN</span>
                            <h3>{cancion.titulo}</h3>
                            <p>{cancion.artista}</p>
                        </div>
                    </div>
                    <div className="ruleta-acciones">
                        <button
                            type="button"
                            className="ruleta-boton-girar"
                            onClick={girarRuleta}
                            disabled={playlist.length < 2}
                        >
                            ↻ Otra sorpresa
                        </button>
                        <button
                            type="button"
                            className="ruleta-boton-pedir"
                            onClick={() => onPedir(cancion.titulo, `Ruleta de ${nombreCabina}`)}
                        >
                            Sumar a la cola
                        </button>
                    </div>
                </>
            ) : (
                <p className="ruleta-vacia">Todavía no hay canciones para descubrir.</p>
            )}
        </section>
    );
}

export default RuletaNocturna;
