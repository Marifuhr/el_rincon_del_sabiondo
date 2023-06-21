import React from 'react'
import logo from '../../assets/image/Logo historia.jpg'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div>
          <img src={logo} alt="" />
          <h1>El Rincón del Sabiondo</h1>
          <SearchBar />
          <div>
              <Link to='/home'>Inicio
              </Link>
          </div>
          <div>
              <Link to='/login'>
                  Registrarse
              </Link>
              <div>
                  {/* <Link to='/carrito'>
                      <img src={carrito} alt="Not Found" />
                  </Link> */}
              </div>
          </div>
          <div>

          </div>
      </div>
      
  )
}
