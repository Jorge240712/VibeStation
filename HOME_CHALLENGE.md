# 🌙 Home Challenge — Turno de Noche

**De:** Nova (Hangar 3, Estación Umbral)
**Para:** Cadete de turno

La playlist quedó funcionando. Ahora la tripulación del turno de noche quiere saber qué tan movida es cada canción antes de darle play, y cada cadete quiere ver su propia música en la lista.

Trabajas sobre el mismo Mixtape de la clase. Los estilos ya están en `estilos-l2.css`: solo falta el JSX.

Tiempo estimado: menos de una hora.

---

## 🎫 Ticket 1 — Componente `Seccion` con `children`

**Archivos:** nuevo `src/components/Seccion.jsx` y `src/App.jsx`

Crea un componente `Seccion` que reciba `titulo` y `children`. Debe devolver un `<section>` con:

- un `<h2 className="seccion-titulo">` con el título
- debajo, el `{children}`

En `App.jsx`, envuelve la playlist con él:

```jsx
<Seccion titulo="Turno de noche">
    <section className="playlist">
        {/* aquí sigue tu .map() de siempre */}
    </section>
</Seccion>
```

✅ **Listo cuando:** el título "Turno de noche" aparece encima de las tarjetas.

---

## 🎫 Ticket 2 — Barra de energía

**Archivos:** `src/App.jsx` y `src/components/TarjetaCancion.jsx`

Cada canción ya tiene `energia` (de 0 a 100) en `canciones.js`. Pásala como prop y pinta esta barra al final de la tarjeta:

```jsx
<div className="barra-energia">
    <div className="barra-energia-relleno" style={{ /* ? */ }}></div>
</div>
```

El ancho del relleno sale de la prop. Pista: `width` necesita un texto como `"72%"`.

✅ **Listo cuando:** "Soldadura en Órbita" tiene la barra casi llena y "Bosque de los Anillos" apenas a un tercio.

---

## 🎫 Ticket 3 — Tu canción entra a la playlist

**Archivos:** `src/data/canciones.js` y limpieza

La semana pasada pusiste tu canción favorita en `cancion.js`. Ahora va a la playlist:

1. Agrégala como quinto objeto del array en `canciones.js`, con `id: 5` y todos los campos que tienen las demás (ponle tú si es `favorita` y cuánta `energia` tiene).
2. Cuando aparezca en pantalla, borra `src/data/cancion.js` y `src/components/Siguiente.jsx`. Ya nadie los usa.

✅ **Listo cuando:** ves 5 tarjetas, el contador dice 5 (si hiciste el bonus de la clase) y la app funciona sin `cancion.js`.

---

## ⭐ Bonus — Playlist vacía

**Archivo:** `src/App.jsx`

Si el array está vacío, en lugar de la sección muestra:

```jsx
<p className="playlist-vacia">Aún no hay canciones en la estación</p>
```

Para probarlo, deja el array como `export const canciones = [];` un momento (y después devuélvelo a como estaba).

Pista: es "esto o aquello", así que va con ternario. Ojo con la trampa del `0` que vimos en la teoría.

✅ **Listo cuando:** con el array vacío sale el mensaje, y con canciones sale la playlist.
