import { useNavigate } from "react-router-dom"
import imagePokebola from "../img/poke-bola.png"

const Card = ({pokemon, setInfoCompartida}) => {

    const navigate = useNavigate()
    const {nombre, url, id} = pokemon

    return (
        <div className='card'>
            <p className='poke-name'>{nombre}</p>
            <p className='poke-id'>ID: {id}</p>
            <div className='container-image'>
                <img className='poke-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Imagen Pokemon" />
            </div>
            <div className='container-boton-ver'>
                <button
                    type='buttom'
                    className='boton-ver'
                    onClick={() => {
                        setInfoCompartida({
                            id:id,
                            nombre: nombre
                        })
                        navigate("/pokemons/ver")
                        return
                    }}
                >
                    <img
                    className='image-boton-ver'
                    src={imagePokebola}
                    alt="Imagen Pokebola"
                >
                    </img>
                        Ver
                </button>
            </div>
        </div>
    )
}

export default Card

//navigate("/pokemons/ver")