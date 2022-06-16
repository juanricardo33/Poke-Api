import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import imagenLogo from "../img/pokemon-logo.png"

const Layout = () => {

    const location = useLocation()
    const urlActual = location.pathname

    return (
        <>
            <div className='container'>
                <div className='nav-container'>
                    <div className='container-logo'>
                        <img className='logo' src={imagenLogo} alt="Imagen Logo" />
                    </div>
                    <div className='container-nav'>
                        <nav className='barra-nav'>
                            <Link
                                to={"/pokemons"}
                                className={`${urlActual === '/pokemons' ? 'nav-text nav-text-selected' : 'nav-text' }`}
                            >All Pokemon
                            </Link>
                            <Link
                                to={"/pokemons/search"}
                                className={`${urlActual === '/pokemons/search' ? 'nav-text nav-text-selected' : 'nav-text' }`}
                            >Busca tu Pokemon
                            </Link>
                            <Link
                                to={"/pokemons/who"}
                                className={`${urlActual === '/pokemons/who' ? 'nav-text nav-text-selected' : 'nav-text' }`}
                            >Quien es Ese Pokemon
                            </Link>
                        </nav>
                    </div>
                </div>

            </div>
            <Outlet/>
        </>

    )
}

export default Layout
