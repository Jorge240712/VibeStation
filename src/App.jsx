import { useState } from "react";
import Encabezado from "./components/Encabezado.jsx";
import TarjetaCancion from "./components/TarjetaCancion.jsx";
import PedidoCancion from "./components/PedidoCancion.jsx";
import ListaPedidos from "./components/ListaPedidos.jsx";
import Reproductor from "./components/Reproductor.jsx";
import PiePagina from "./components/PiePagina.jsx";
import Seccion from "./components/Seccion.jsx";
import RuletaNocturna from "./components/RuletaNocturna.jsx";
import { canciones } from "./data/canciones.js";

// Ticket 1: Constante con el nombre de tu cabina
const NOMBRE_CABINA = "Vibe Station";

function App() {
    // L3, Bonus: lo que el usuario escribe vive en un estado y el input lo muestra (input controlado)
    const [busqueda, setBusqueda] = useState("");

    // Ticket 3: La playlist vive en el estado inicializada con el array importado
    const [playlist, setPlaylist] = useState(canciones);

    // Ticket 3: Función alternarFavorita sin mutar (usa map y objeto copiado con spread)
    const alternarFavorita = (id) => {
        setPlaylist((actual) =>
            actual.map((cancion) =>
                cancion.id === id ? { ...cancion, favorita: !cancion.favorita } : cancion
            )
        );
    };

    // Ticket 3: Cantidad de favoritas calculada directamente de la playlist en cada render (sin otro estado)
    const totalFavoritas = playlist.filter((cancion) => cancion.favorita).length;

    // L3, Bonus: .toLowerCase() a los dos lados para el buscador
    // Ticket 3: Se usa playlist en lugar de canciones originales para el buscador/visibles
    const visibles = playlist.filter((cancion) =>
        cancion.titulo.toLowerCase().includes(busqueda.trim().toLowerCase())
    );

    // Clase, Ticket 1: La lista de pedidos vive aquí en el padre
    const [pedidos, setPedidos] = useState([]);

    function agregar(titulo, quien) {
        const nuevo = { id: Date.now(), titulo, quien, sono: false };
        setPedidos((actuales) => [...actuales, nuevo]);
    }

    function borrar(id) {
        setPedidos((actuales) => actuales.filter((p) => p.id !== id));
    }

    function marcar(id) {
        setPedidos((actuales) =>
            actuales.map((p) => (p.id === id ? { ...p, sono: !p.sono } : p))
        );
    }

    function limpiar() {
        setPedidos((actuales) => actuales.filter((p) => !p.sono));
    }

    return (
        <main className="app">
            {/* Ticket 1: Se pasa la constante por props y el total de favoritas calculado */}
            <Encabezado titulo={NOMBRE_CABINA} totalFavoritas={totalFavoritas} />

            <RuletaNocturna
                nombreCabina={NOMBRE_CABINA}
                playlist={playlist}
                onPedir={agregar}
            />

            {playlist.length > 0 ? (
                <Seccion titulo="Turno de noche">
                    <input
                        className="buscador"
                        type="text"
                        placeholder="Buscar canción..."
                        aria-label="Buscar una canción por título"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <section className="playlist">
                        {visibles.map((cancion) => (
                            <TarjetaCancion
                                key={cancion.id}
                                id={cancion.id}
                                titulo={cancion.titulo}
                                artista={cancion.artista}
                                album={cancion.album}
                                duracion={cancion.duracion}
                                portada={cancion.portada}
                                anio={cancion.anio}
                                reproducciones={cancion.reproducciones}
                                favorita={cancion.favorita}
                                energia={cancion.energia}
                                onFavorita={alternarFavorita}
                            />
                        ))}
                    </section>
                    {visibles.length === 0 && (
                        <p className="playlist-vacia">
                            No encontramos canciones con “{busqueda}”.
                        </p>
                    )}
                </Seccion>
            ) : (
                <p className="playlist-vacia">Aún no hay canciones en la estación</p>
            )}

            <PedidoCancion onAgregar={agregar} />
            <ListaPedidos pedidos={pedidos} onMarcar={marcar} onBorrar={borrar} onLimpiar={limpiar} />
            <Reproductor />
            <PiePagina />
        </main>
    );
}

export default App;