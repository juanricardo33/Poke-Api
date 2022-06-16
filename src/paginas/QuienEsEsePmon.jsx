import { useState, useEffect  } from "react"
import {numberRandomInteger} from "../helpers"
import Alerta from "../components/Alerta"

const QuienEsEsePmon = () => {


  const [data, setData] = useState([])
  const [reset, setReset] = useState(false)
  const [nombre, setNombre] = useState("")
  const [validate,setvalidate] = useState(false)
  const [mostrarMensaje, setMostrarMensaje] = useState(false)
  const [mensaje, setMensaje] = useState("")
  const [tipoMensaje, setTipoMensaje] = useState("")
  const [hidden, setHidden] = useState(true)

  useEffect(() =>{
    if (reset){
      const obtenerPokemons = async () => {
          try {
              const randomId = numberRandomInteger(1,1000)
              const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()

              setReset(false)
              setData(resultado)
          } catch (error) {
              console.log(error);
              setReset(false)
          }
      }
      obtenerPokemons()
    }
  },[reset])
  console.log("El nombre del Pokemon es: ", data.name);

  useEffect(() => {
    if(nombre == data.name){
      //console.log("el nombre concuerda");
      setTipoMensaje("general-mensaje")
      setvalidate(false)
      setMensaje("!Genial! intenta con un nuevo Pokemon")
      setMostrarMensaje(true)
      setHidden(false)
    }else{
      //console.log("El nombre no concuerda");
      setTipoMensaje("general-alerta")
      setMensaje("intenta de Nuevo o preciona el boton Reset")
      setMostrarMensaje(true)
      setvalidate(false)
      setHidden(true)
    }
  },[validate])


  return (
    <div className="container">
      <div className="who-text-container">
        <label htmlFor="nombre-pokemon"></label>
        <input
          className="who-text"
          id="nombre-pokemon"
          type="text"
          placeholder="Quien es ese pokemon"
          value={nombre}
          onChange={ (e) => {
            setNombre(e.target.value.toLowerCase())
          }}
        />
      </div>

      <div className="contenedor-info-pokemon">
        <div className='pag-ver-container-image'>
            <img
                className={hidden ? ('pag-ver-image image-hidden') : ("pag-ver-image")}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                alt="Imagen Pokemon"
                >
            </img>
        </div>
        <div className="who-button-container">
          <button
              className="who-boton-reset"
              onClick={() => {
                setReset(true)
                setvalidate(false)
                setMostrarMensaje(false)
                setNombre("")
                setHidden(true)
              }}
            >Reset</button>
          <button
              className="who-boton-validar"
              onClick={() => {
              setvalidate(true)
              setHidden(true)
              }}
            >Validar</button>
          </div>
          {
            mostrarMensaje && (<Alerta tipo={tipoMensaje}>{mensaje}</Alerta>)
          }
        </div>
    </div>
  )
}

export default QuienEsEsePmon

/*

<p className="pag-ver-titulos">{nombre}</p>

*/