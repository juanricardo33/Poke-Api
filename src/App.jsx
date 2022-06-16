import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './layout/Layout'
import AllPokemons from './paginas/AllPokemons'
import BuscaTuPmon from './paginas/BuscaTuPmon'
import QuienEsEsePmon from './paginas/QuienEsEsePmon'
import VerPokemon from './paginas/VerPokemon'
import { useState } from 'react'

function App() {

  const [infoCompartida, setInfoCompartida] = useState({})
  const [habilidades, setHabilidades] = useState([])

  const [infoBusqueda, setInfoBusqueda] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemons" element={<Layout/>}>
          <Route index
                  element={<AllPokemons
                  setInfoCompartida={setInfoCompartida}/>}/>
          <Route path='search'
                  element={<BuscaTuPmon
                    infoBusqueda={infoBusqueda}
                    setInfoBusqueda={setInfoBusqueda}
                    infoCompartida={infoCompartida}
                    setInfoCompartida={setInfoCompartida}
                    habilidades={habilidades}
                    setHabilidades={setHabilidades}

                    />}/>
          <Route path="who"
                  element={<QuienEsEsePmon/>}/>
          <Route path='ver'
                  element={<VerPokemon
                    infoCompartida={infoCompartida}
                    habilidades={habilidades}
                    setHabilidades={setHabilidades}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
