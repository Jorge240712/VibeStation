//🎫 Ticket 1 — Componente Seccion con children
function Seccion({titulo, children}){
    return(
        <section>
            <h2 className="seccion-titulo">{titulo}</h2>
            {children}
        </section>
    );
}

export default Seccion;