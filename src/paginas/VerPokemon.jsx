import { useState, useEffect } from 'react'
import Habilidades from "../components/Habilidades"
import { useParams } from "react-router-dom"
import { array } from 'yup'
const VerPokemon = ({infoCompartida, habilidades, setHabilidades}) => {

    const {nombre, id} = infoCompartida


    return (
        <div className="container">
            <div className="contenedor-info-pokemon">
                <p className="pag-ver-titulos">{nombre}</p>
                <div className='pag-ver-container-image'>
                    <img
                        className='pag-ver-image'
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt="Imagen Pokemon"
                        >
                    </img>
                </div>
                <p className="pag-ver-titulos">Habilidades</p>

                <div className='habilities-contenedor'>
                    {
                        <Habilidades
                            infoCompartida={infoCompartida}
                            habilidades={habilidades}
                            setHabilidades={setHabilidades}

                        />
                    }
                </div>
            </div>
        </div>

    )
}

export default VerPokemon