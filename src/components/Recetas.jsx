import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  

function Recetas() {
    const { id } = useParams();  
    const [receta, setReceta] = useState(null);

    const url = '/recetas.json';  

    const traerReceta = async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
              
                const recetaEncontrada = data.find(r => r.id === parseInt(id)); 
                setReceta(recetaEncontrada);
            } else {
                throw new Error("No se pudo cargar la receta");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        traerReceta();
    }, [id]); 

    if (!receta) {
        return <p>Cargando receta...</p>;
    }

    return (
        <div className="receta-detalle">
            <img className="recetaInd-img" src={receta.imagen} alt={receta.nombre} />
            <h1>{receta.nombre}</h1>
            <br/>
            <h3>Ingredientes</h3>
             <div>
               <ul className="ingredientes">
                 {receta.ingredientes.map((ingrediente, index) => (
                 <li  key={index}>{ingrediente}</li>
                  ))}
              </ul>
             </div>
             <br/>
            <h3>Preparacion</h3> 
            <div><p>{receta.preparacion}</p></div>
         
        </div>
    );
}

export default Recetas;


