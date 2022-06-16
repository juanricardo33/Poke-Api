import { useEffect, useState } from "react"
import Card from "../components/Card"

const AllPokemons = ({setInfoCompartida}) => {

    const [pokemons, setPokemons] = useState([])
    useEffect(() =>{
        const obtenerPokemons = async () => {
            try {
                const url = "https://pokeapi.co/api/v2/pokemon/"// "http://localhost:4000/clientes/" //"https://pokeapi.co/api/v2/item/"
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                const arrayPokemons = resultado.results.map(pokemon => {

                    const objeto = {
                        nombre: pokemon.name,
                        url: pokemon.url
                    }
                    return objeto
                })
                setPokemons(arrayPokemons)
            } catch (error) {
                console.log(error);
            }
        }
        obtenerPokemons()
    },[])



    const newObjetoPokemons = pokemons.map(iterador => {
        const regex = /(\d+)/g
        const urlExtract = iterador.url
        const id = urlExtract.match(regex)

        const nuevoObjeto = {
            nombre: iterador.nombre,
            url: iterador.url,
            id: id[1]
        }
        return nuevoObjeto;
    });

    return (
        <>
            <div className='container'>
                <div className='container-cards'>
                    {newObjetoPokemons.map( pokemon => (
                            <Card
                                setInfoCompartida={setInfoCompartida}
                                pokemon={pokemon}
                                key={pokemon.id}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllPokemons
