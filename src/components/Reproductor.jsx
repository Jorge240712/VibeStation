// Ticket 1: importa useState aquí arriba
import { useState } from "react";
import { canciones } from "../data/canciones.js";
import { IconoPlay, IconoPausa, IconoAnterior, IconoSiguiente } from "./Iconos.jsx";

// ── Pieza de Nova: ya viene lista, no la cambies ─────────────────────────
// El <audio> es un elemento especial: cambiar un estado no lo hace sonar.
// Hay que darle la orden "play" o "pause" directamente, y esta función
// busca el audio en la página y se la da. Tú solo la llamas:
//     darOrden("play")    o    darOrden("pause")
function darOrden(orden) {
    const audio = document.getElementById("audio-mixtape");
    if (!audio) return;

    if (orden === "play") {
        audio.play().catch(() => {});
    } else {
        audio.pause();
    }
}
// ─────────────────────────────────────────────────────────────────────────

function Reproductor() {
    // Ticket 1: cambia esta línea por un estado que arranque en false
    const [reproduciendo, setReproduciendo] = useState(false);

    // Ticket 2: cambia esta línea por un estado que arranque en 0
    const [indice, setIndice] = useState(0);

    // Ticket 3: aquí va el estado del progreso, que arranca en 0
    const [progreso, setProgreso] = useState(0);
    // La canción que está sonando sale del array, según el índice
    const cancion = canciones[indice];

    // Ticket 1
    function alternar() {
        // Si está sonando: darOrden("pause"). Si no: darOrden("play").
        if(reproduciendo === true){
            darOrden("pause");
        }
        else{
            darOrden("play");
        }
        // Después, cambia reproduciendo por lo contrario de lo que vale ahora.
         setReproduciendo(!reproduciendo);
    }

    // Ticket 2
    function siguiente() {
        // Si es la última canción, vuelve a la primera (índice 0).
        // Si no, pasa a la que sigue.
        setProgreso(0);
        if(indice === canciones.length - 1){
            setIndice(0);
        }
        else{
            setIndice(indice + 1);
        }
    }

    // Ticket 2
    function anterior() {
        // Si es la primera canción, salta a la última.
        // Si no, vuelve a la de antes.
        setProgreso(0);
        if(indice === 0){
            setIndice(canciones.length - 1);
        }
        else{
            setIndice(indice - 1);
        }
    }

    return (
        <div className="reproductor">
            {/* El audio no se ve: suena. key hace que se cree uno nuevo cada vez que cambia la canción,
                y autoPlay hace que la nueva arranque sola si la anterior estaba sonando. */}
            <audio
                id="audio-mixtape"
                key={indice}
                src={cancion.audio}
                autoPlay={reproduciendo}
                // Ticket 2: cuando la canción termina, pasa a la siguiente (onEnded)
                onEnded={siguiente}
                // Ticket 3: mientras suena, guarda el progreso (onTimeUpdate)
                onTimeUpdate={(e) => setProgreso((e.target.currentTime / e.target.duration) * 100)}
            ></audio>

            <div className="reproductor-info">
                <img src={cancion.portada} alt="Portada" className="reproductor-portada" />

                <div className="reproductor-textos">
                    {/* Ticket 1: "Sonando ahora" o "En pausa", según reproduciendo */}
                    <p className="reproductor-estado">{reproduciendo ? "Sonando ahora" : "En pausa"}</p>
                    <p className="reproductor-titulo">{cancion.titulo}</p>
                    <p className="reproductor-artista">{cancion.artista}</p>
                    {!cancion.audio && <p className="reproductor-aviso">Esta canción no tiene audio</p>}
                </div>

                {/* Ticket 1: el ecualizador va aquí */}
                {reproduciendo && (
                    <div className="ecualizador">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
            </div>

            {/* Ticket 3: el ancho del relleno sale del estado del progreso */}
            <div className="barra-progreso">
                <div className="barra-progreso-relleno" style={{ width: `${progreso}%` }}></div>
            </div>

            <div className="controles">
                <button className="boton-control" aria-label="Anterior" onClick={anterior}>
                    <IconoAnterior />
                </button>
                <button className="boton-control boton-play" aria-label="Play o pausa" onClick={alternar}>
                    {reproduciendo ? <IconoPausa /> : <IconoPlay />}
                </button>
                <button className="boton-control" aria-label="Siguiente" onClick={siguiente}>
                    <IconoSiguiente />
                </button>
            </div>
        </div>
    );
}

export default Reproductor;
