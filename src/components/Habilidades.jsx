import { useState, useEffect } from 'react'
import {generarId} from "../helpers"

const Habilidades = ({infoCompartida, habilidades, setHabilidades}) => {

    const {nombre, id} = infoCompartida

    useEffect(() =>{
        const obtenerHabilities = async () => {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                var objeto = resultado.abilities.map(iterador => {
                return iterador.ability.name
                })
                setHabilidades(objeto)
            } catch (error) {
                console.log(error);
            }
        }
        obtenerHabilities()

    },[infoCompartida])

    setTimeout(() => {



    console.log("Segunda etapa primer MAP", habilidades);
    if(habilidades.abilities === undefined){
        console.log("Error al mapear habilidades");
    }else{
            habilidades.abilities.map(iterador => {
                console.log("Desde el iterador 2", iterador.ability.name);
            return
        })
    }

}, 50);

    return (
        <div className='habilities-contenedor'>
            {
                habilidades.map(element => (
                    <p
                        className='habilities-title-text'
                        key={generarId()}>Habilidad:
                        <span className='habilities-title-span'>{element}</span>
                    </p>
                ))
            }
        </div>
    )
}

export default Habilidades
