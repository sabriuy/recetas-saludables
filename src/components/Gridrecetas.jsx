import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Importa Link de React Router

function Gridrecetas() {
    const [recetas, setRecetas] = useState([]);

    const url = '/recetas.json'; // Asegúrate de que el archivo esté en la carpeta public

    const traerrecetas = async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setRecetas(data);
            } else {
                throw new Error("No se pudieron cargar los productos");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        traerrecetas();
    }, []);

    return (
        <div className="contenedor-recetas">
            {recetas.length === 0 ? (
                <p>Cargando recetas...</p>
            ) : (
                recetas.map((receta, index) => (
                    <div key={index} className="receta">
                        <img className="receta-imagen" src={receta.imagen} alt={receta.nombre} />
                        <div className="contenedor-titulo">
                            {/* Usa Link en lugar de <a> */}
                            <Link to={`/receta/${receta.id}`}>  {/* Suponiendo que cada receta tenga un id único */}
                                <p className="receta-titulo">{receta.nombre}</p>
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Gridrecetas;
