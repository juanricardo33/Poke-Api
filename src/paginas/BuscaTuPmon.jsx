import { useEffect, useState } from "react"
import Pokedex from "../img/Pokedex.png"
import imagePokebola from "../img/poke-bola.png"
import Formulario from "../components/Formulario"
import Habilidades from "../components/Habilidades"
import Alerta from "../components/Alerta"
const BuscaTuPmon = ({infoBusqueda,
                        setInfoBusqueda,
                        infoCompartida,
                        setInfoCompartida,
                        habilidades,
                        setHabilidades}
        ) => {

  const [idBusqueda, setIdBusqueda] =useState("")
  const [errorConsulta, setErrorConsulta] = useState(false)

    useEffect(() =>{
    const obtenerPokemon = async () => {
        console.log("Prueba de objeto", infoBusqueda.nombrePokemon);
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${infoBusqueda.nombrePokemon.toLowerCase()}`

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            console.log("Resultado de busqueda",resultado);
            setIdBusqueda(resultado.id)
            setInfoCompartida({
              id: resultado.id
            })

            setErrorConsulta(false)
        } catch (error) {
            if(error){
              setErrorConsulta(true)
              setHabilidades([])
            }else{
              setErrorConsulta(false)
            }
        }
    }
    obtenerPokemon()
},[infoBusqueda])


  return (
    <>
    <Formulario setInfoBusqueda={setInfoBusqueda}/>
      {errorConsulta && (
        <div className="container">
          <Alerta>{"Valida el nombre del Pokemon"}</Alerta>
        </div>
      )}
      <div className="busca-pokemon-container">
        {Object.keys(infoBusqueda).length && !errorConsulta ? (
            <img
            className="busca-pokemon-image"
            alt="Image pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idBusqueda}.svg`}
            />
          ):
            <img
            className="busca-pokemon-image"
            alt="Image pokemon"
            src={imagePokebola}
            />
        }
      </div >

      <div className='busca-info-container container'>
          <Habilidades infoCompartida={infoCompartida} habilidades={habilidades} setHabilidades={setHabilidades}/>
      </div>
    </>

  )
}

export default BuscaTuPmon

/*


busca-image-container{
  diaplay: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.busca-back-image{
  position:relative;
  top: 35%;
  left : 10%;
  width:80%;
  z-index: 1;
}
.busca-image{
  position:relative;
  top: 0%;
  left : -19%;
  width:27%;
  z-index: 2;
}
.busca-info-container{
  position:relative;
  top: -10%;
  left : -60%;
  z-index: 3;
}




.busca-image-container{
display: grid;
}
.busca-back-image{
  position:relative;
  top: 35%;
  left : 10%;
  width:80%;
  z-index: 1;
}
.busca-image{
  position:relative;
  top: -80%;
  left : 60%;
  width:27%;
  z-index: 2;
}
.busca-info-container{
  position:relative;
  top: -10%;
  left : -60%;
  z-index: 3;
}
*/